const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('err', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

