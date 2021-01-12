const Sequelize = require('sequelize')
const db = require('../db')

const Toy = db.define('toy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 10.0,
  },
  image: {
    type: Sequelize.STRING,
  },
  inventory: {
    type: Sequelize.NUMBER,
  },
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
