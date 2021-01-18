'use strict'

const db = require('../server/db')
const {
  reviews,
  toys,
  userInfo,
  orderItems,
  purchaseActivities,
  userLogin
} = require('./seed-data')

const {
  UserLogin,
  Toy,
  Review,
  PurchaseActivity,
  OrderItem,
  UserInfo
} = require('../server/db/models')
const {act} = require('react-test-renderer')

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
  const activity = await PurchaseActivity.bulkCreate(purchaseActivities)
  const orderItem = await OrderItem.bulkCreate(orderItems)

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
