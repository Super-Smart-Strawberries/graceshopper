const router = require('express').Router()
const {Toy, OrderItem, PurchaseActivity} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const data = req.body
    const newOrderItem = OrderItem.create(data)
    res.send(newOrderItem)
  } catch (error) {
    console.log(error)
  }
})

router.put('/update/:orderItemId', async (req, res, next) => {
  try {
    const {user} = req
    const {id} = user
    const data = req.body
    const {orderItemId} = req.params
    const guestId = req.sessionID
    if (user) {
      // Existing user
      const {dataValues} = await PurchaseActivity.findOne({
        where: {
          userLoginId: id,
          isOrdered: false
        }
      })
      const updated = await OrderItem.update(data, {
        returning: true,
        where: {
          id: orderItemId,
          purchaseActivityId: dataValues.id
        }
      })
      const [numUpdated, [updatedOrder]] = updated
      if (!numUpdated) {
        // orderItem was not found
        return res.sendStatus(404)
      }
      res.send(updatedOrder)
    } else {
      // Guest user
      const {dataValues} = await PurchaseActivity.findOne({
        where: {
          guestId: guestId,
          isOrdered: false
        }
      })
      const updated = await OrderItem.update(data, {
        returning: true,
        where: {
          id: orderItemId,
          purchaseActivityId: dataValues.id
        }
      })
      const [numUpdated, [updatedOrder]] = updated
      if (!numUpdated) {
        // orderItem was not found
        return res.sendStatus(404)
      }
      res.send(updatedOrder)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/delete/:orderItemId', async (req, res, next) => {
  try {
    const orderItemId = req.params.orderItemId
    if (req.user) {
      const userId = req.user.id
      // Existing user
      const {dataValues} = await PurchaseActivity.findOne({
        where: {
          userLoginId: userId,
          isOrdered: false
        }
      })
      await OrderItem.destroy({
        where: {
          id: orderItemId,
          purchaseActivityId: dataValues.id
        }
      })
      res.sendStatus(204).end()
    } else {
      // Guest user
      const {dataValues} = await PurchaseActivity.findOne({
        where: {
          guestId: req.session.guestId,
          isOrdered: false
        }
      })
      await OrderItem.destroy({
        where: {
          id: orderItemId,
          purchaseActivityId: dataValues.id
        }
      })
      res.sendStatus(204).end()
    }
  } catch (err) {
    next(err)
  }
})
