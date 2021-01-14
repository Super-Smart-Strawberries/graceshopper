const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const UserLogin = db.define('userLogin', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    allowNull: false,
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING
  }
})

module.exports = UserLogin

/**
 * instanceMethods
 */
UserLogin.prototype.correctPassword = function(candidatePwd) {
  return (
    UserLogin.encryptPassword(candidatePwd, this.salt()) === this.password()
  )
}

/**
 * classMethods
 */
UserLogin.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

UserLogin.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = UserLogin.generateSalt()
    user.password = UserLogin.encryptPassword(user.password(), user.salt())
  }
}

UserLogin.beforeCreate(setSaltAndPassword)
UserLogin.beforeUpdate(setSaltAndPassword)
UserLogin.beforeBulkCreate(users => {
  users.forEach(setSaltAndPassword)
})
