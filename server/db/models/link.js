const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('link', {
  link: {
    type: Sequelize.STRING,
    allowNull: false
  },
  linkModified: {
    type: Sequelize.DATE,
  },
  linkCreated: {
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

