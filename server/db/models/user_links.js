const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('user_links', {
  vote: {
    type: Sequelize.ENUM('upvote', 'downvote'),
  }
});
