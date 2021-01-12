const {green, red} = require('chalk')
const {db, Toy, Review} = require('./server/db')

const seed = async () => {
  try {
    await db.sync({force: true})

    // seed your database here!
    await Robot.create({
      name: 'Rubber Ducky',
      imageUrl:
        'https://images.unsplash.com/photo-1483706571191-85c0c76b1947?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cm9ib3QlMjBwbGFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    })

    const robots = await Robot.findAll()
    const projects = await Project.findAll()
    await robots[2].addProject(projects[2])
    await robots[3].addProject(projects[1])
    await robots[0].addProject(projects[1])
    await robots[4].addProject(projects[2])
    await projects[1].addRobot(robots[0])
    await projects[2].addRobot(robots[3])
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
