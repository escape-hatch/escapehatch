const router = require('express').Router();
const ghRequest = require('./github/request')
const soRequest = require('./stackapp/request')
const githubFormatter = require('./github/formatter')
const stackAppFormatter = require('./stackapp/formatter')
const base64url = require('base64-url')
const Promise = require('bluebird')
const db = require('../../db')
const dbFormatter = require('./utils/dbFormatter')
const addVotes = require('./utils/dbApiZipVotes')

// what happens if any single 3rd party API call fails?
// service param?

router

.get('/:err', (req, res, next) => {
  const userErr = base64url.decode(req.params.err)
  const [errType, errMsg] = userErr.split(': ')

  const awaitdb = db.query('SELECT * FROM errs \
    JOIN err_link ON errs.id = err_link."errId" \
    JOIN links ON err_link."linkId" = links.id \
    JOIN user_links ON user_links."linkId" = links.id \
    WHERE errs.type = :type AND errs.message = :message', { replacements: { type: errType, message: errMsg} })

  Promise.all([
    ghRequest(userErr),
    soRequest(userErr),
    awaitdb
  ])
  .spread((githubResults, stackAppResults, dbResults) => {
    const stackData = stackAppFormatter(stackAppResults.data.items, userErr)
    const gitData = githubFormatter(githubResults.items, userErr)
    const data = { stackapp: stackData, github: gitData }
    const voteData = dbFormatter(dbResults[0])
    const formattedData = addVotes(data, voteData)
    res.json(formattedData)
  })
  .catch(err => console.error(err))
});

module.exports = router;
