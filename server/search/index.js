const router = require('express').Router();
// const github = require('./github/request')
const base64url = require('base64-url');

// what happens if any single 3rd party API call fails?

router.get('/:err/:service', (req, res, next) => {
  const userErr = base64url.decode(req.params.err)
  // const service = req.params.service || 'all'

  console.log(userErr)
  res.send(userErr)
  // res.json(github(userErr))
});

module.exports = router;
