const router = require('express').Router();
const Link = require('../db').model('link');
const user_links = require('../db').model('user_links');

router

// get all links that a user has upvoted
.get('/:userId', (req, res, next) => {
  user_links.findAll()
  .then(votes => {
    res.send(votes)
  })
  .catch(next);
})

module.exports = router;
