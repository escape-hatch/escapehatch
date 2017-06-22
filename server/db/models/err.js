const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('err', {
  message: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  instanceMethods: {
  },
  classMethods: {
  },
  hooks: {
  }
});

