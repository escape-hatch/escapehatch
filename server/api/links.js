const router = require('express').Router();
const Err = require('../db').model('err');
const Link = require('../db').model('link');
const err_link = require('../db').model('err_link');
module.exports = router;

router.get('/', (req, res, next) => {
  Link.findAll()
  .then(links => res.send(links))
  .catch(next)
})

// get all links associated with a particular error
router.get('/:errId', (req, res, next) => {
  Err.findById(req.params.errId)
  .then(err => {
    return err.getLinks()
  })
  .then(links => {
    res.send(links)
  })
  .catch(next)
})
