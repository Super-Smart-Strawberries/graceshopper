const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/toys', require('./toys'))
router.use('/reviews', require('./reviews'))
router.use('/purchase-activity', require('./purchase-activity'))
router.use('/order-item', require('./order-item'))
// router.use('/orderHistory', require('./order-history'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
