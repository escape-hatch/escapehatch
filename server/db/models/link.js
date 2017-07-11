const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./user')
const Err = require('./err')

module.exports = db.define('link', {
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
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
  vendor: {
    type: Sequelize.ENUM('github', 'stackapp')
  },
  vendor_id: {
    type: Sequelize.INTEGER
  }
}, {
  classMethods: {
    propogateLink: async function(info, userId) {
      const [errType, errMessage] = info.error.includes(': ')
        ? info.error.split(': ')
        : ['Error', info.error];

      const createLink = this.findOrCreate({
        where: {
          vendor_id: info.vendor_id,
          vendor: info.vendor
        },
        defaults: {
          title: info.title,
          link: info.url,
          linkedPostCreated: info.created,
          linkedPostModified: info.modified
        }
      })
      const createErr = Err.findOrCreate({
        where: {
          type: errType,
          message: errMessage
        }
      })
      const findUser = User.findById(userId)
      const[
        [link] = linkAndBool,
        [error] = errorAndBool,
        user
      ] = await Promise.all([createLink, createErr, findUser])

      const
        errLink = error.addLink(link),
        userLink = user.addLink(link, { vote: info.vote }),
        userErr = user.addErr(error)
      await Promise.all([errLink, userLink, userErr])
      return link
    }
  },
});
