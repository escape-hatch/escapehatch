const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('link', {
  link: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dateModified: {
    type: Sequelize.DATE,
  },
  dateCreated: {
    type: Sequelize.DATE,
  },
}, {
  instanceMethods: {
  },
  classMethods: {
  },
  hooks: {
  }
});

