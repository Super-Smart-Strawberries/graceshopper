'use strict'

const db = require('../server/db')

const {
  UserLogin,
  Toy,
  Review,
  PurchaseActivity,
  OrderHistory
} = require('../server/db/models')

const toy = {
  name: 'Lovely Duckly',
  description: 'Rubber Ducky',
  price: 150.98,
  inventory: 15
}

const activity = {
  isOrdered: false,
  quantity: 2
}

const toyOne = {
  name: 'rubber ducky',
  description: 'the one friend on your desk',
  price: 15.5,
  image:
    'https://cdn.shopify.com/s/files/1/0012/4482/3632/products/duck_1200x.jpg?v=1583533109',
  inventory: 20
}

const review = {
  ratings: 5,
  description: 'this ducky is an amazing companion for your coding.'
}

const reviewTwo = {
  ratings: 1,
  description: 'this is a waste of money.'
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    UserLogin.create({email: 'cody@email.com', password: '123'}),
    UserLogin.create({email: 'murphy@email.com', password: '123'})
  ])

  const lovelyDuckly = await Toy.create(toy)
  const activityOne = await PurchaseActivity.create(activity)
  await activityOne.addToy(lovelyDuckly)

  const toy1 = await Toy.create(toyOne)
  const review1 = await Review.create(review)
  const review2 = await Review.create(reviewTwo)
  await toy1.addReview(review1)
  await toy1.addReview(review2)

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
