const Sequelize = require('sequelize')

const DATABASE_NAME = 'cardconf-apollo-server'

const db = new Sequelize(
  `postgres://localhost:5432/${DATABASE_NAME}`, {
    logging: false
  }
)

module.exports = db
