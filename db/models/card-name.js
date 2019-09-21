const Sequelize = require('sequelize')

const db = require('../db')

const CardName = db.define('card_name', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rulesText: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  cmc: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  edhrecRank: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  handModifier: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lifeModifier: {
    type: Sequelize.STRING,
    allowNull: false
  },
  loyalty: {
    type: Sequelize.STRING,
    allowNull: false
  },
  manaCost: {
    type: Sequelize.STRING,
    allowNull: false
  },
  power: {
    type: Sequelize.STRING,
    allowNull: false
  },
  toughness: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reserved: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = CardName
