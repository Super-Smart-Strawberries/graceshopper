const Sequelize = require('sequelize')
const db = require('../db')

const Toy = db.define('toy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1000
  },
  image: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images-na.ssl-images-amazon.com/images/I/51VXgNZFIoL._AC_SL1424_.jpg'
  },
  inventory: {
    type: Sequelize.INTEGER
  }
})

module.exports = Toy

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
