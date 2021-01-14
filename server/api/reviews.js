const router = require('express').Router()
const {Review} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      attributes: ['ratings', 'description']
    })
    res.json(reviews)
  } catch (err) {
    next(err)
  }
})
