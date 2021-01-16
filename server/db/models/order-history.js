const Sequelize = require('sequelize')
const db = require('../db')

const OrderHistory = db.define('orderHistory', {
  orderDate: {
    type: Sequelize.DATE
  }
})

module.exports = OrderHistory
