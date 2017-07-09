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
  const userId = req.session.passport.user;
  const info = {
    error: req.body.error,
    vendor: req.body.vendor,
    vendor_id: req.body.vendor_id,
    vote: req.body.vote,
    url: req.body.url,
    created: req.body.created,
    modified: req.body.modified
  };
  return Link.propogateLink(info, userId)
  .then(response => res.status(200).send(response))
  .catch(next);
});


module.exports = router;
