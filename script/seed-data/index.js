const reviews = require('./reviews')
const toys = require('./toys')
const userInfo = require('./userInfo')
const orderItems = require('./order-items')
const purchaseActivities = require('./purchase-activities')
const userLogin = require('./userLogins')

const seedData = {
  reviews,
  toys,
  userInfo,
  orderItems,
  purchaseActivities,
  userLogin
}

module.exports = seedData
