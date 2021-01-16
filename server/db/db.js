const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

//heroku config:set DEPLOY=strawberries (setting env. variable) => process.env
//if(process.env.DEPLOY === ‘strawberries’) { db= SSL } else { db = NO_SSL}
let db

if (process.env.DEPLOY === 'true') {
  db = new Sequelize(
    process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
    {
      logging: false,
      operatorsAliases: false,
      dialect: 'postgres',
      protocol: 'postgres',
      ssl: true,
      dialectOptions: {
        ssl: true
      }
    }
  )
} else {
  db = new Sequelize(
    process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
    {
      logging: false
    }
  )
}
module.exports = db

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
