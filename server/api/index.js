const router = require('express').Router();
module.exports = router;

router.use('/search', require('./search'));
router.use('/users', require('./users'));
router.use('/links', require('./links'))

router.use((req, res) => {
  res.status(404).send('Not found');
});
