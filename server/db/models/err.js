const Sequelize = require('sequelize');
const db = require('../db');
const Link = require('./link')

module.exports = db.define('err', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  instanceMethods: {
  },
  classMethods: {
  },
  hooks: {
  }
});

