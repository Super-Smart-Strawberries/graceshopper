const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  ratings: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    },
    description: {
      type: Sequelize.TEXT
    }
  }
})

module.exports = Review

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
