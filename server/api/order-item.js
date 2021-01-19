const router = require('express').Router()
const {Toy, OrderItem, PurchaseActivity} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const newOrderItem = OrderItem.create(req.body)
    res.send(newOrderItem)
  } catch (error) {
    console.log(error)
  }
})

router.put('/update/:orderItemId', async (req, res, next) => {
  try {
    if (req.user) {
      // Existing user
      const {dataValues} = await PurchaseActivity.findOne({
        where: {
          userLoginId: req.user.id
        }
      })
      const updated = await OrderItem.update(req.body, {
        returning: true,
        where: {
          id: req.params.orderItemId,
          purchaseActivityId: dataValues.id
        }
      })
      if (updated.length !== 2) {
        // orderItem was not found
        return res.sendStatus(404)
      }
      const [numUpdated, [updatedOrder]] = updated
      res.send(updatedOrder)
    } else {
      // Guest user
      const {dataValues} = await PurchaseActivity.findOne({
        where: {
          userLoginId: req.sessionID
        }
      })
      const updated = await OrderItem.update(req.body, {
        returning: true,
        where: {
          id: req.params.orderItemId,
          purchaseActivityId: dataValues.id
        }
      })
      if (updated.length !== 2) {
        // orderItem was not found
        return res.sendStatus(404)
      }
      const [numUpdated, [updatedOrder]] = updated
      res.send(updatedOrder)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/delete/:orderItemId', async (req, res, next) => {
  try {
    if (req.user) {
      // Existing user
      const {dataValues} = await PurchaseActivity.findOne({
        where: {
          userLoginId: req.user.id
        }
      })
      await OrderItem.destroy({
        where: {
          id: req.params.orderItemId,
          purchaseActivityId: dataValues.id
        }
      })
      res.sendStatus(204).end()
    } else {
      // Guest user
      const {dataValues} = await PurchaseActivity.findOne({
        where: {
          userLoginId: req.sesisonID
        }
      })
      await OrderItem.destroy({
        where: {
          id: req.params.orderItemId,
          purchaseActivityId: dataValues.id
        }
      })
      res.sendStatus(204).end()
    }
  } catch (err) {
    next(err)
  }
})
