const router = require('express').Router()
const {Toy, OrderItem} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const newOrderItem = await OrderItem.create({toyId: req.toy.id})
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
