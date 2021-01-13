const router = require('express').Router()
const {PurchaseActivity, Toy} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const cartInfo = await PurchaseActivity.findAll({
      where: {
        status: false
      },
      include: [Toy]
    })
    res.send(cartInfo)
  } catch (err) {
    next(err)
  }
})

router.delete(
  '/deletePurchase/:purchaseActivityId/:toyId',
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
  '/updatePurchase/:purchaseActivityId/:toyId',
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
