const Sequelize = require('sequelize')
const db = require('../db')

const OrderHistory = db.define('order-history', {
  orderDate: {
    type: Sequelize.DATE
  }
})

module.exports = OrderHistory
