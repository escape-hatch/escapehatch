const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('vote', {
  vote: {
    type: Sequelize.ENUM('upvote', 'downvote'),
  },
}, {
  instanceMethods: {
  },
  classMethods: {
  },
  hooks: {
  }
});

