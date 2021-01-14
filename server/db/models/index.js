const PurchaseActivity = require('./purchase-activity')
const OrderHistory = require('./order-history')
const UserLogin = require('./user-login')
const UserInfo = require('./user-info')
const Toy = require('./toys')
const Review = require('./reviews')
const OrderItem = require('./order-item')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Toy.hasMany(Review)
Review.belongsTo(Toy)

PurchaseActivity.belongsTo(UserLogin)
UserLogin.hasOne(PurchaseActivity)

// PurchaseActivity.belongsToMany(Toy, {through: 'toypurchases'})
// Toy.belongsToMany(PurchaseActivity, {through: 'toypurchases'})

OrderHistory.belongsTo(PurchaseActivity)
PurchaseActivity.hasOne(OrderHistory)

UserLogin.hasOne(UserInfo)
UserInfo.belongsTo(UserLogin)

// OrderItem.hasOne(Toy)
OrderItem.belongsTo(Toy)
PurchaseActivity.hasMany(OrderItem)
OrderItem.belongsTo(PurchaseActivity)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  PurchaseActivity,
  OrderHistory,
  Toy,
  Review,
  UserLogin,
  UserInfo,
  OrderItem
}
