const passport = require('passport');
const router = require('express').Router();
const Strategy = require('passport-stackexchange').Strategy;
const User = require('../db/models/user');
let secret;

try {
  secret = require('../../secret');
}
catch (err){
  console.log('No secret file found. Skipping OAuth.');
}

if (secret) {
  const stackConfig = {
    clientID: secret.STACK_CLIENT_ID,
    clientSecret: secret.STACK_CLIENT_SECRET,
    key: secret.STACK_KEY,
    callbackURL: 'escapehatch.herokuapp.com'
  };

  const strategy = new Strategy(stackConfig, (accessToken, refreshToken, profile, done) => {
    const stackId = profile.id;
    const email = profile.email;
    const firstName = profile._json.name;
    console.log(profile)
    User.findOrCreate({
      where: { stackId },
      defaults: { email, firstName }
    })
    .spread( user => done(null, user))
    .catch(done);
  });

  passport.use(strategy);
}

module.exports = router
  .get('/', passport.authenticate('stackexchange'))
  .get('/callback', passport.authenticate('stackexchange', {
    successRedirect: '/home',
    failureRedirect: '/login'
  }));
