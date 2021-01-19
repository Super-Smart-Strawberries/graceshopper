const router = require('express').Router()
const {PurchaseActivity, Toy, OrderItem} = require('../db/models')
module.exports = router

router.get('/:activityId', async (req, res, next) => {
  try {
    if (req.user) {
      // Existing user
      const confirmedOrder = await PurchaseActivity.findOne({
        where: {
          id: req.params.activityId,
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
      res.send(confirmedOrder)
    } else {
      // No user found
      res.status(404).send('No user found')
    }
  } catch (err) {
    next(err)
  }
})
