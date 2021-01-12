const {green, red} = require('chalk')
const {db, Toy, Review} = require('./server/db')

const seed = async () => {
  try {
    await db.sync({force: true})

    // seed your database here!
    await Toy.create({
      name: 'Rubber Ducky',
      image:
        'https://images.unsplash.com/photo-1601829534265-66684bd4dcc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
    })

    const toys = await Toy.findAll()
    const reviews = await Review.findAll()
    await toys[1].addReview(reviews[2])
  } catch (err) {
    console.log(red(err))
  }
}

module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'))
      db.close()
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
}
