const router = require('express').Router()
const {Toy} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const toys = await Toy.findAll({
      attributes: ['name', 'description', 'image']
    })
    res.json(toys)
  } catch (err) {
    next(err)
  }
})

module.exports = router
