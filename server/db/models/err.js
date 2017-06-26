const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('err', {
  type: {
    type: Sequelize.ENUM('TypeError', 'SyntaxError', 'ReferenceError', 'EvalError', 'InternalError', 'RangeError', 'URIError'), // perhaps need to change to account for library errors..
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

