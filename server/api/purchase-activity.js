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

router.delete(
  '/delete-purchase/:purchase-activityId/:toyId',
  async (req, res, next) => {
    try {
      const {purchaseActivityId, toyId} = req.params
      const activity = await PurchaseActivity.findOne({
        where: {id: purchaseActivityId}
      })
      await activity.removeToy([toyId])
      res.sendStatus(204).end()
    } catch (err) {
      next(err)
    }
  }
)

router.post('/', async (req, res, next) => {
  try {
    const addToy = await PurchaseActivity.create(req.body)
    res.send(addToy)
  } catch (err) {
    next(err)
  }
})

router.put(
  '/update-purchase/:purchase-activityId/:toyId',
  async (req, res, next) => {
    try {
      const {purchaseActivityId, toyId} = req.params
      const updateActivity = await PurchaseActivity.findByPk(purchaseActivityId)
      const updated = await updateActivity.update(
        {
          where: {
            toyId: toyId
          }
        },
        req.body
      )
      res.send(updated)
    } catch (err) {
      next(err)
    }
  }
)
