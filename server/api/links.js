const router = require('express').Router();
const Promise = require('bluebird')
const Link = require('../db/models/link.js')

router

// when user clicks "solved/helpful/etc":
.put('/:vendor', (req, res, next) => {
  const info = {
    error: 'TypeError: Assignment to constant variable.',
    vendor: 'github',
    vendor_id: 12345,
    vote: 'upvote',
    url: 'https://github.com',
    created: '2017-06-18 12:10:37',
    modified: '2017-06-27 12:10:37'
  }
  return Link.propogateLink(info, 3)
  .then(response => res.status(200).send(response))
  .catch(next)
/*
  userId
  info
    .error
    .vendor
    .vendor_id
    .vote
    .url
  */
  // call propogateLink
})


module.exports = router
