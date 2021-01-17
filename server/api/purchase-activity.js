const router = require('express').Router()
const {PurchaseActivity, Toy, OrderItem} = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const singleCartInfo = await PurchaseActivity.findByPk(req.params.id, {
      where: {
        isOrdered: false
      },
      include: [
        {
          model: OrderItem,
          include: [Toy]
        }
      ]
    })
    res.send(singleCartInfo)
  } catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//   try {
//     console.log(req.body)
//     const user = await PurchaseActivity.findByPk({
//       where: {
//         userLoginId: req.body,
//       },
//     })
//     if (!user) {
//       const activity = await PurchaseActivity.create({
//         where: {
//           userLoginId: req.body,
//         },
//       })
//       const newOrderItem = await OrderItem.create(req.body)
//       const newPurchaseActivity = await PurchaseActivity.setOrderItem(
//         newOrderItem
//       )
//     } else {
//     const newOrderItem = await OrderItem.create(req.body)
//     const newPurchaseActivity = await PurchaseActivity.addOrderItem(
//       newOrderItem
//     )
//     res.send(newOrderItem)
//   } catch (error) {
//     console.log(error)
//   }
// })

router.get('/', async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err)
  }
})
