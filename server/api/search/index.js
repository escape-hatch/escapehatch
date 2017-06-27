const router = require('express').Router();
const github = require('./github/request')
const githubFormatter = require('./github/formatter')
const stackAppFormatter = require('./stackapp/formatter')
const base64url = require('base64-url')
const stackApp = require('./stackapp/request')
const Promise = require('bluebird')

// what happens if any single 3rd party API call fails?
// service param?

router.get('/:err', (req, res, next) => {
  const userErr = base64url.decode(req.params.err)

  Promise.all([github(userErr), stackApp(userErr)])
  .spread((githubResults, stackAppResults) => {
    const stackData = stackAppFormatter(stackAppResults.data.items)
    const gitData = githubFormatter(githubResults.items)
    const data = { stackData, gitData }
    res.json(data)
  })
  // .then(response => res.json(response))
  .catch(err => console.error(err))
});

module.exports = router;
