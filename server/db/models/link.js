const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('link', {
  link: {
    type: Sequelize.STRING,
    allowNull: false
  },
  linkedPostCreated: {
    type: Sequelize.DATE,
  },
  linkedPostModified: {
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

