const router = require('express').Router()
const {PurchaseActivity, Toy, OrderItem} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const {user} = req
    const {id} = user
    const guestId = req.sessionID
    if (user) {
      // Existing user
      const usersCartInfo = await PurchaseActivity.findOne({
        where: {
          isOrdered: false,
          userLoginId: id
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
      const guestCartInfo = await PurchaseActivity.findOne({
        where: {
          isOrdered: false,
          guestId: guestId
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

router.post('/', async (req, res, next) => {
  try {
    const {id} = req.user
    const newCartItem = await PurchaseActivity.create({
      userLoginId: id
    })
    res.send(newCartItem)
  } catch (error) {
    console.log(error)
  }
})

router.put('/:activityId', async (req, res, next) => {
  try {
    const {user} = req
    const {id} = user
    const {activityId} = req.params
    if (user) {
      const ordered = await PurchaseActivity.update(
        {isOrdered: true},
        {
          returning: true,
          where: {
            id: activityId,
            userLoginId: id
          }
        }
      )
      if (ordered.length !== 2) {
        return res.sendStatus(404)
      }
      const [numUpdated, [orderedActivity]] = ordered
      res.send(orderedActivity)
    } else {
      res.send('Cannot be ordered!')
    }
  } catch (err) {
    console.log(err)
  }
})
