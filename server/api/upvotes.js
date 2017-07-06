const router = require('express').Router();
const Link = require('../db').model('link');
const user_links = require('../db').model('user_links');

router

// get all links that a user has upvoted
.get('/', (req, res, next) => {
  const userId = req.session.passport.user

  user_links.findAll()
    .then(votes => {
      const userUpvotes = votes.filter(v => v.userId === userId && v.vote === 'upvote')
      return userUpvotes
    })
    .then(userUpvotes => {
      const linkIds = userUpvotes.map(u => u.linkId)
      const fetchLinks = linkIds.map(linkId => {
        return Link.findById(linkId)
      })

      Promise.all(fetchLinks)
        .then(links => res.send(links))
    })
    .catch(next);
})

module.exports = router;
