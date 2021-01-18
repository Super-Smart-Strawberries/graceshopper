const router = require('express').Router()
const {Toy, Review, OrderItem, PurchaseActivity} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const toys = await Toy.findAll({
      attributes: ['id', 'name', 'description', 'image']
    })
    res.json(toys)
  } catch (err) {
    next(err)
  }
})

router.get('/:toyId', async (req, res, next) => {
  try {
    const toy = await Toy.findByPk(req.params.toyId, {
      include: [
        {
          model: Review
        }
      ]
    })
    res.send(toy)
  } catch (err) {
    next(err)
  }
})

router.post('/:toyId', async (req, res, next) => {
  try {
    if (req.user) {
      const previousActivity = await PurchaseActivity.findOne({
        where: {
          isOrdered: false,
          userLoginId: req.user.id
        }
      })
      const toy = await Toy.findByPk(req.params.toyId)
      //loggedinUser
      if (previousActivity) {
        const newOrderItem = await OrderItem.create(req.body)
        await newOrderItem.setPurchaseActivity(previousActivity)
        await newOrderItem.setToy(toy)
        res.send(newOrderItem)
      } else {
        console.log(req)
        const newPurchaseActivity = await PurchaseActivity.create({
          userLoginId: req.user.id
        })
        const newOrderItem = await OrderItem.create(req.body)
        await newOrderItem.setPurchaseActivity(newPurchaseActivity)
        await newOrderItem.setToy(toy)
        res.send(newOrderItem)
      }
    } else {
      console.log('this is for the guest route')
    }
  } catch (error) {
    console.log(error)
  }
})
