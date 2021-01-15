const router = require('express').Router()
const {Toy, Review} = require('../db/models')
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
          model: Review,
          where: {
            toyId: req.params.toyId
          }
        }
      ]
    })
    res.send(toy)
  } catch (err) {
    next(err)
  }
})
