const github = require('octonode')
const client = github.client()
const ghsearch = client.search()
// const formatter = require('./formatter')

module.exports = function (userErr) {

  return ghsearch.issues({ q: userErr }, (err, res) => {
    if (err) throw err
    return res
  })

}
