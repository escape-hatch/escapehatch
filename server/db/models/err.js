const Sequelize = require('sequelize');
const db = require('../db');
const Link = require('./link')

module.exports = db.define('err', {
  type: {
    type: Sequelize.ENUM('TypeError', 'SyntaxError', 'ReferenceError', 'EvalError', 'InternalError', 'RangeError', 'URIError'),
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false
  },
  stack: {
    type: Sequelize.TEXT,
  }
}, {
  instanceMethods: {
  },
  classMethods: {
  },
  hooks: {
  }
});

