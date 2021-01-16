const Sequelize = require('sequelize')
const db = require('../db')

const PurchaseActivity = db.define('purchaseActivity', {
  isOrdered: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = PurchaseActivity
