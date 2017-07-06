const router = require('express').Router();
const User = require('../db/models/user');
const userPrevPath = require('./sessionMiddleware');

module.exports = router
  .post('/login', userPrevPath, (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (!user)
          res.status(401).send('User not found');
        else if (!user.correctPassword(req.body.password))
          res.status(401).send('Incorrect password');
        else
          console.log(req.session)
          req.login(user, err => err ? next(err) : res.json(user));
      })
      .catch(next);
  })
  .post('/signup', userPrevPath, (req, res, next) => {
    User.create(req.body)
      .then(user =>
        req.login(user, err => err ? next(err) : res.json(user)))
      .catch(err => {
        if (err.name === 'SequelizeUniqueConstraintError')
          res.status(401).send('User already exists');
        else next(err);
      });
  })
  .post('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  })
  .get('/me', (req, res) => {
    res.json(req.user);
  })
  .use('/google', require('./google'))
  .use('/github', require('./github'))
  .use('/stack', require('./stackexchange'));
