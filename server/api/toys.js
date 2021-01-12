const router = require('express').Router()
const {Toy, User} = require('../db/index')

module.exports = router

router.get('/:toyId', async (req, res, next) => {
  try {
    const toy = await Toy.findByPk(req.params.toyId)
    res.send(toy)
  } catch (err) {
    next(err)
  }
})
