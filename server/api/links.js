const router = require('express').Router();
const Err = require('../db').model('err');
const Link = require('../db').model('link');
const err_link = require('../db').model('err_link');
const Promise = require('bluebird');

router

.get('/', (req, res, next) => {
  Link.findAll()
  .then(links => res.send(links))
  .catch(next);
})

// get all links associated with a particular error
.get('/:errId', (req, res, next) => {
  Err.findById(req.params.errId)
  .then(err => {
    return err.getLinks()
  })
  .then(links => {
    res.send(links);
  })
  .catch(next);
})

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
  };
  return Link.propogateLink(info, 3)
  .then(response => res.status(200).send(response))
  .catch(next);
});


module.exports = router;
