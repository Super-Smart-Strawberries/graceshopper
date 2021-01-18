const router = require('express').Router()
const {Toy, Review} = require('../db/models')
const isAdmin = require('../auth/isAdmin')
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
          // where: {
          //   toyId: req.params.toyId
          // }
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
    const toy = await Toy.findbyPk(req.params.toyId)
    await toy.update(req.body)
    res.send(toy)
  } catch (err) {
    console.log('error updating toy! ', err)
    next(err)
  }
})

router.delete('/:toyId', isAdmin, async (req, res, next) => {
  try {
    await Toy.destroy({
      where: {
        toyId: req.params.toyId
      }
    })
    res.status(204).end()
  } catch (err) {
    console.log('problem deleting toy! ', err)
    next(err)
  }
})
