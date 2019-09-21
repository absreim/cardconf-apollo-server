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
  },
  booster: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  collectorNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  digital: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  flavorText: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  fullArt: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  highresImage: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  illustrationId: {
    type: Sequelize.UUID,
    allowNull: true
  },
  printedName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  printedText: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  printedTypeLine: {
    type: Sequelize.STRING,
    allowNull: false
  },
  promo: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  releasedAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  reprint: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  storySpotlight: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  textless: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  variation: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = Edition
