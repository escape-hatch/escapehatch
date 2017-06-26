const router = require('express').Router();
const github = require('./github/request')
const formatter = require('./github/formatter')
const base64url = require('base64-url');

// what happens if any single 3rd party API call fails?
// service param?

router.get('/:err', (req, res, next) => {
  const userErr = base64url.decode(req.params.err)

  github(userErr)
  .then(result => formatter(result.items))
  .then(formattedItems => res.json(formattedItems))
  .catch(err => console.error(err))

});

module.exports = router;
