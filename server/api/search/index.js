const router = require('express').Router();
const github = require('./github/request');
const githubFormatter = require('./github/formatter');
const stackAppFormatter = require('./stackapp/formatter');
const base64url = require('base64-url');
const stackApp = require('./stackapp/request');
const Promise = require('bluebird');

// what happens if any single 3rd party API call fails?
// service param?

router.get('/:err', (req, res, next) => {
  const userErr = base64url.decode(req.params.err);

  Promise.all([github(userErr), stackApp(userErr)])
  .spread((githubResults, stackAppResults) => {
    // console.log('githubResults:', Object.keys(githubResults));
    // console.log('githubResults:', githubResults.items[0]);


    const transformed = stackAppFormatter(stackAppResults.data.items);

    res.json(transformed);

    //Reference to Original Code
    // const stackData = stackAppFormatter(stackAppResults.data.items, userErr)
    // const gitData = githubFormatter(githubResults.items, userErr)
    // const data = { stackData, gitData }
    // res.json(data)

  })
  .catch(next);
});

module.exports = router;
