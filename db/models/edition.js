const Sequelize = require('sequelize')

const db = require('../db')

const Edition = db.define('edition', {
  arenaId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  scryfallId: {
    type: Sequelize.UUID,
    allowNull: false
  },
  mtgoId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  mtgoFoilId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tcgplayerId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  foil: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  nonFoil: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  oversized: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = Edition
