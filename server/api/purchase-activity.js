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

router.post('/', async (req, res, next) => {
  try {
    const addToy = await PurchaseActivity.create(req.body)
    res.send(addToy)
  } catch (err) {
    next(err)
  }
})
