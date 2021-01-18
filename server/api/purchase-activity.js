const router = require('express').Router()
const {PurchaseActivity, Toy, OrderItem} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const singleCartInfo = await PurchaseActivity.findOne({
        where: {
          isOrdered: false,
          userLoginId: req.user.id
        },
        include: [
          {
            model: OrderItem,
            include: [Toy]
          }
        ]
      })
      res.send(singleCartInfo)
    } else {
      const singleCartInfo = await PurchaseActivity.findOne({
        where: {
          isOrdered: false,
          guestId: req.sessionID
        },
        include: [
          {
            model: OrderItem,
            include: [Toy]
          }
        ]
      })
      res.send(singleCartInfo)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newCartItem = await PurchaseActivity.create({
      userLoginId: req.user.id
    })
    res.send(newCartItem)
  } catch (error) {
    console.log(error)
  }
})
