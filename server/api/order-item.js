const router = require('express').Router()
const {Toy, OrderItem, PurchaseActivity} = require('../db/models')
module.exports = router

// router.post('/', async (req, res, next) => {
//   try {
//     const previousActivity = await PurchaseActivity.findOne({
//       where: {
//         isOrdered: false,
//         userLoginId: req.user.id,
//       },
//     })
//     const user = req.user.id
//     if (previousActivity) {
//       const newOrderItem = await OrderItem.create(req.body)
//       await OrderItem.setPurchaseActivity(previousActivity)
//     }

//     res.send(newOrderItem)
//   } catch (error) {
//     console.log(error)
//   }
// })

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
    const orderById = await OrderItem.findByPk(req.params.orderItemId)
    const updated = await orderById.update(req.body)
    res.send(updated)
  } catch (err) {
    next(err)
  }
})

router.delete('/delete/:orderItemId', async (req, res, next) => {
  try {
    const {orderItemId} = req.params
    const removeOrderItem = await OrderItem.findByPk(orderItemId)
    await removeOrderItem.destroy()
    res.sendStatus(204).end()
  } catch (err) {
    next(err)
  }
})
