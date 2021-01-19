const router = require('express').Router()

const isAdmin = (req, res, next) => {
  req.user.isAdmin
    ? next()
    : res.status(401).send('You do not have the permission to view this page')
}

router.use('/users', require('./users'))
router.use('/toys', require('./toys'))
router.use('/reviews', require('./reviews'))
router.use('/purchase-activity', require('./purchase-activity'))
router.use('/order-item', require('./order-item'))
router.use('/order-history', require('./order-history'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
