const router = require('express').Router();
const Link = require('../db').model('link');
const user_links = require('../db').model('user_links');

router

// get all links that a user has upvoted
.get('/', (req, res, next) => {
  const userId = req.session.passport.user

  user_links.findAll()
  .then(votes => {
    const userVotes = votes.filter(v => v.userId === userId)
    res.send(userVotes)
  })
  .catch(next);
})

module.exports = router;
