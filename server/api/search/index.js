const router = require('express').Router();
const github = require('./github/request')
const githubFormatter = require('./github/formatter')
const stackAppFormatter = require('./stackapp/formatter')
const base64url = require('base64-url')
const stackApp = require('./stackapp/request')
const Promise = require('bluebird')
const he = require('he')
// what happens if any single 3rd party API call fails?
// service param?

router.get('/:err', (req, res, next) => {
  console.log("GET /:err backend");
  const userErr = base64url.decode(req.params.err)

  Promise.all([github(userErr), stackApp(userErr)])
  .spread((githubResults, stackAppResults) => {
    const transformed = stackAppResults.data.items.map( item => {
      const newItem = Object.assign({}, item, {
        title: he.decode(item.title)
      })

      return newItem;

    })

    // console.log("stackAppResults:", stackAppResults)
    // githubFormatter(githubResults.items)
    res.json(transformed)
  })
  // .then(response => res.json(response))
  .catch(next)
});

module.exports = router;
