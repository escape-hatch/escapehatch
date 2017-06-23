const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('vote', {
  upvote: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  downvote: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
}, {
  instanceMethods: {
  },
  classMethods: {
  },
  hooks: {
  }
});

