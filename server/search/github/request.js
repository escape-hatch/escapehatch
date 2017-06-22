const Promise = require('bluebird')
const github = require('octonode')
const client = github.client()
const ghsearch = client.search()
// const formatter = require('./formatter')
const issues = Promise.promisify(ghsearch.issues.bind(ghsearch))

module.exports = function (userErr) {

    return issues({ q: 'sequelize error', per_page: 10 })
    .then(res => res)
    .catch(err => console.error(err))

}
