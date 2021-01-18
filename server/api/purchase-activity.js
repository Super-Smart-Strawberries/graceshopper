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
//     const userLoginId = req.user.id
//     const data = req.body
//     if (userLoginId) {
//       const newActivity = await PurchaseActivity.findOrCreate({
//         where: {
//           userLoginId: userLoginId,
//           isOrdered: false,
//         },
//       })
//       const newOrderItem = await OrderItem.create(req.body)
//       const newPurchaseActivity = await PurchaseActivity.setOrderItem(
//         newOrderItem
//       )
//     } else {
//       console.log('how do i do this??')
//     }
//     res.write(newActivity)
//     res.write(newOrderItem)
//     res.write(newPurchaseActivity)
//     res.end()
//   } catch (error) {
//     console.log(error)
//   }
// })

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
    const singleCartInfo = await PurchaseActivity.findAll({
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
