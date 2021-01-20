const router = require('express').Router()
const {UserLogin, UserInfo} = require('../db/models')
const isAdmin = require('../auth/isAdmin')
module.exports = router

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await UserLogin.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', isAdmin, async (req, res, next) => {
  try {
    const id = req.params.userId
    const user = await UserLogin.findByPk(id, {
      include: {model: UserInfo}
    })
    if (isNaN(Number(id))) {
      res.status(400).send('This is not a valid user id')
      return
    }
    if (!user) {
      res.status(404).send('User with this id was not found')
      return
    }
    res.send(user)
  } catch (err) {
    next(err)
  }
})
