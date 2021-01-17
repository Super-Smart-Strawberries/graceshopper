'use strict'

const db = require('../server/db')
const reviews = require('./reviews')
const toys = require('./toys')
const userInfo = require('./userInfo')
const {
  UserLogin,
  Toy,
  Review,
  PurchaseActivity,
  OrderItem,
  UserInfo
} = require('../server/db/models')
const {act} = require('react-test-renderer')

const orderItemOne = {
  quantity: 2,
  toyId: 3,
  purchaseActivityId: 1
}

const activityOne = {
  isOrdered: false,
  userLoginId: 1
}
const activityTwo = {
  isOrdered: false,
  userLoginId: 2
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    UserLogin.create({email: 'cody@email.com', password: '123', isAdmin: true}),
    UserLogin.create({email: 'murphy@email.com', password: '123'})
  ])
  //bulk create data
  const createdToys = await Toy.bulkCreate(toys)
  const createdReviews = await Review.bulkCreate(reviews)
  const createdUserInfo = await UserInfo.bulkCreate(userInfo)
  const activity1 = await PurchaseActivity.create(activityOne)
  const activity2 = await PurchaseActivity.create(activityTwo)
  const item1 = await OrderItem.create(orderItemOne)
  // await activity1.addOrderItem

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
