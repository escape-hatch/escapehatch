const router = require('express').Router();
const github = require('./github/request')
const githubFormatter = require('./github/formatter')
const stackAppFormatter = require('./stackapp/formatter')
const base64url = require('base64-url')
const stackApp = require('./stackapp/request')
const Promise = require('bluebird')
const Err = require('../../db/models/err')
const Link = require('../../db/models/link')
const UserLink = require('../../db/models/user_links')

// what happens if any single 3rd party API call fails?
// service param?

router

.get('/:err', (req, res, next) => {
  const userErr = base64url.decode(req.params.err)
  const [errType, errMsg] = userErr.split(': ')

  Promise.all([
    github(userErr),
    stackApp(userErr),
    Err.find({
      where: { type: errType, message: errMsg },
      include: [ { model: Link } ]
    })
  ])
  .spread((githubResults, stackAppResults, dbResults) => {
    const stackData = stackAppFormatter(stackAppResults.data.items, userErr);
    const gitData = githubFormatter(githubResults.items, userErr);
    const data = { stackData, gitData };

    res.json(data);
  })
  .catch(next);
});

module.exports = router;


// query DB for err string, pull up associated links
// pass DB info into formatters
