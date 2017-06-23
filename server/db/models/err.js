const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('err', {
  type: {
    type: Sequelize.ENUM('TypeError', 'SyntaxError', 'ReferenceError', 'EvalError', 'InternalError', 'RangeError', 'URIError'),
  },
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

