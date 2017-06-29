const router = require('express').Router();
const Promise = require('bluebird')
const Link = require('../db/models/link.js')

router

// when user clicks "solved/helpful/etc":
.put('/:vendor', (req, res, next) => {
  const info = {
    error: 'TypeError: Assignment to constant variable.',
    vendor: 'github',
    vendor_id: 172854580,
    vote: 'upvote',
    url: 'https://github.com/rezen/assess/issues/1',
    created: '2017-06-18 12:10:37',
    modified: '2017-06-27 12:10:37'
  }
  return Link.propogateLink(info, 3)
  .then(response => res.status(200).send(response))
  .catch(next)
})


module.exports = router
