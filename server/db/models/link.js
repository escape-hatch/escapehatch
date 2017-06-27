const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./user')
const Err = require('./err')

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
  vendor: {
    type: Sequelize.ENUM('github', 'stackapp')
  },
  vendor_id: {
    type: Sequelize.INTEGER
  }
}, {
  instanceMethods: {
  },
  classMethods: {
    propogateLink: async function(info, userId) {
      const [errType, errMessage] = info.error.split(': ')

      const createLink = this.findOrCreate({
        where: {
          vendor_id: info.vendor_id,
          vendor: info.vendor
        },
        defaults: {
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
      const[link, error, user] = await Promise.all([createLink, createErr, findUser])

      const errLink = error[0].addLink(link[0])
      const userLink = user.addLink(link[0], { vote: info.vote })
      const userErr = user.addErr(error[0])
      await Promise.all([errLink, userLink, userErr])
      return link[0]
    }
  },
  hooks: {
  }
});
