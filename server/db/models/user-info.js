const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const UserInfo = db.define('userInfo', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  billingAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shippingAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  CCInfo: {
    type: Sequelize.STRING,
    validate: {
      isCreditCard: true
    },
    get() {
      return () => this.getDataValue('CCInfo')
    }
  },
  DOB: {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
})

module.exports = UserInfo

UserInfo.encryptCCInfo = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

UserInfo.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

const setSaltAndCCInfo = user => {
  if (user.changed('CCInfo')) {
    user.salt = UserInfo.generateSalt()
    user.CCInfo = UserInfo.encryptCCInfo(user.CCInfo(), user.salt())
  }
}
UserInfo.beforeCreate(setSaltAndCCInfo)
UserInfo.beforeUpdate(setSaltAndCCInfo)
UserInfo.beforeBulkCreate(users => {
  users.forEach(setSaltAndCCInfo)
})
