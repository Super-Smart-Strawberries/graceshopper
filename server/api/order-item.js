const router = require('express').Router()
const {Toy, OrderItem} = require('../db/models')
module.exports = router

router.put('/update/:orderItemId', async (req, res, next) => {
  console.log('req.body from express route: ', req.body)
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
