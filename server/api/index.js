const router = require('express').Router()

const isAdmin = (req, res, next) => {
  console.log('REQQQQQQQQ', router.get.req)
  req.user.isAdmin
    ? next()
    : res.status(401).send('You do not have the permission to view this page')
}

router.use('/users', require('./users'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
