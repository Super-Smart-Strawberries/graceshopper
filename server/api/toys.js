const router = require('express').Router()
const isAdmin = require('../auth/isAdmin')
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


router.post('/', isAdmin, async (req, res, next) => {
  try {
    const newToy = await Toy.create(req.body)
    res.send(newToy)
  } catch (err) {
    console.log('Unauthorized!!! ', err)
    next(err)
  }
})

router.put('/:toyId', isAdmin, async (req, res, next) => {
  try {
    const toy = await Toy.findByPk(req.params.toyId)
    await toy.update(req.body)
    res.send(toy)
  } catch (err) {
    console.log('error updating toy! ', err)
    next(err)
  }
})

router.delete('/:toyId', isAdmin, async (req, res, next) => {
  console.log(req.params)
  try {
    const {toyId} = req.params
    const toyToDelete = await Toy.findByPk(toyId)
    await toyToDelete.destroy()
    res.status(204).end()
  } catch (err) {
    console.log('problem deleting toy! ', err)
    next(err)

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
        const newPurchaseActivity = await PurchaseActivity.create({
          userLoginId: req.user.id
        })
        const newOrderItem = await OrderItem.create(req.body)
        await newOrderItem.setPurchaseActivity(newPurchaseActivity)
        await newOrderItem.setToy(toy)
        res.send(newOrderItem)
      }
    } else {
      const previousActivity = await PurchaseActivity.findOne({
        where: {
          isOrdered: false,
          guestId: req.sessionID
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
        const newPurchaseActivity = await PurchaseActivity.create({
          guestId: req.sessionID
        })
        const newOrderItem = await OrderItem.create(req.body)
        await newOrderItem.setPurchaseActivity(newPurchaseActivity)
        await newOrderItem.setToy(toy)
        res.send(newOrderItem)
      }
    }
  } catch (error) {
    console.log(error)
  }
})
