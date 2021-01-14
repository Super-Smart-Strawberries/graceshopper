const Sequelize = require('sequelize')
const db = require('../db')

const PurchaseActivity = db.define('purchase-activity', {
  isOrdered: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

module.exports = PurchaseActivity
