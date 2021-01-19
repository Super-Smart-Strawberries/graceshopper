const router = require('express').Router()
const {PurchaseActivity, Toy, OrderItem} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      // Existing user
      const usersCartInfo = await PurchaseActivity.findOne({
        where: {
          isOrdered: true,
          userLoginId: req.user.id
        },
        include: [
          {
            model: OrderItem,
            include: [Toy]
          }
        ]
      })
      res.send(usersCartInfo)
    } else {
      // Guest user
      console.log(req.sessionID)
      const guestCartInfo = await PurchaseActivity.findOne({
        where: {
          isOrdered: true,
          guestId: req.sessionID
        },
        include: [
          {
            model: OrderItem,
            include: [Toy]
          }
        ]
      })
      res.send(guestCartInfo)
    }
  } catch (err) {
    next(err)
  }
})
