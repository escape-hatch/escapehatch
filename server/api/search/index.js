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
const sortData = require('./utils/sortResults')
const Err = require('../../db/models/err');
const Link = require('../../db/models/link');
const UserLink = require('../../db/models/user_links');

// what happens if any single 3rd party API call fails?
// service param?

router

.get('/:err', (req, res, next) => {

  const userErr = base64url.decode(req.params.err);
  const [errType, errMsg] = userErr.includes(': ')
    ? userErr.split(': ')
    : ['Error', userErr];

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
    const data = { stackapp: stackData, github: gitData, error: userErr }
    const voteData = dbFormatter(dbResults[0])
    const formattedData = addVotes(data, voteData)
    // const sortedData = sortData(formattedData)
    res.json(formattedData)
  })
  .catch(next);
});

module.exports = router;
