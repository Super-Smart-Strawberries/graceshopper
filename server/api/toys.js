const router = require('express').Router()
const {Toy, Review, OrderItem, PurchaseActivity} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const toys = await Toy.findAll({
      attributes: ['id', 'name', 'description', 'image']
    })
    res.json(toys)
  } catch (err) {
    next(err)
  }
})

router.get('/:toyId', async (req, res, next) => {
  try {
    const {toyId} = req.params
    const toy = await Toy.findByPk(toyId, {
      include: [
        {
          model: Review
        }
      ]
    })
    res.send(toy)
  } catch (err) {
    next(err)
  }
})

router.post('/:toyId', async (req, res, next) => {
  try {
    const {user} = req
    const {id} = user
    const {quantity} = req.body
    const {toyId} = req.params
    const guestId = req.sessionID

    if (user) {
      // Logged-in user
      const previousActivity = await PurchaseActivity.findOne({
        where: {
          isOrdered: false,
          userLoginId: id
        }
      })
      if (previousActivity) {
        // Existing activity
        const newOrderItem = await OrderItem.create({
          quantity: quantity,
          toyId: toyId
        })
        await newOrderItem.setPurchaseActivity(previousActivity)
        res.send(newOrderItem)
      } else {
        // New activity to be generated
        const newPurchaseActivity = await PurchaseActivity.create({
          userLoginId: id
        })
        const newOrderItem = await OrderItem.create({
          quantity: quantity,
          toyId: toyId
        })
        await newOrderItem.setPurchaseActivity(newPurchaseActivity)
        res.send(newOrderItem)
      }
    } else {
      // Guest user
      const previousActivity = await PurchaseActivity.findOne({
        where: {
          isOrdered: false,
          guestId: guestId
        }
      })
      if (previousActivity) {
        // Existing activity
        const newOrderItem = await OrderItem.create({
          quantity: quantity,
          toyId: toyId
        })
        await newOrderItem.setPurchaseActivity(previousActivity)
        res.send(newOrderItem)
      } else {
        // New activity to be generated
        const newPurchaseActivity = await PurchaseActivity.create({
          guestId: guestId
        })
        const newOrderItem = await OrderItem.create({
          quantity: quantity,
          toyId: toyId
        })
        await newOrderItem.setPurchaseActivity(newPurchaseActivity)
        res.send(newOrderItem)
      }
    }
  } catch (error) {
    console.log(error)
  }
})
