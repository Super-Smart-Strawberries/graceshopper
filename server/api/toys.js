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
  const {toyId} = req.params
  try {
    const {toyId} = req.params

    const toy = await Toy.findByPk(toyId, {
      include: [
        {
          model: Review
        }
      ]
    })
    if (isNaN(Number(toyId))) {
      res.status(400).send('This is not a valid product ID')
      return
    }
    if (!toyId) {
      res.status(404).send('Product with this id was not found')
      return
    }
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
  }
})

router.post('/:toyId', async (req, res, next) => {
  try {
    const {user} = req
    const {id} = user
    const {quantity} = req.body
    const {toyId} = req.params
    const guestId = req.sessionID

    if (user) {
      // Logged-in user
      const previousActivity = await PurchaseActivity.findOne({
        where: {
          isOrdered: false,
          userLoginId: id
        }
      })
      if (previousActivity) {
        // Existing activity
        const newOrderItem = await OrderItem.create({
          quantity: quantity,
          toyId: toyId
        })
        await newOrderItem.setPurchaseActivity(previousActivity)
        res.send(newOrderItem)
      } else {
        // New activity to be generated
        const newPurchaseActivity = await PurchaseActivity.create({
          userLoginId: id
        })
        const newOrderItem = await OrderItem.create({
          quantity: quantity,
          toyId: toyId
        })
        await newOrderItem.setPurchaseActivity(newPurchaseActivity)
        res.send(newOrderItem)
      }
    } else {
      // Guest user
      const previousActivity = await PurchaseActivity.findOne({
        where: {
          isOrdered: false,
          guestId: guestId
        }
      })
      if (previousActivity) {
        // Existing activity
        const newOrderItem = await OrderItem.create({
          quantity: quantity,
          toyId: toyId
        })
        await newOrderItem.setPurchaseActivity(previousActivity)
        res.send(newOrderItem)
      } else {
        // New activity to be generated
        const newPurchaseActivity = await PurchaseActivity.create({
          guestId: guestId
        })
        const newOrderItem = await OrderItem.create({
          quantity: quantity,
          toyId: toyId
        })
        await newOrderItem.setPurchaseActivity(newPurchaseActivity)
        res.send(newOrderItem)
      }
    }
  } catch (error) {
    console.log(error)
  }
})
