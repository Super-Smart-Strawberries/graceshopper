const db = require('./db')
const {User} = require('./db/models')
const newUser = {
  email: 'example@mail.ru',
  password: '12345jfifopewij!@*#$'
}
const seed = async () => {
  try {
    await db.sync({force: true})
    return User.create(newUser)
  } catch (err) {
    console.log(red(err))
  }
}

module.exports = seed
