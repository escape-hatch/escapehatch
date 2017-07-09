const passport = require('passport');
const router = require('express').Router();
const Strategy = require('passport-stackexchange').Strategy;
const User = require('../db/models/user');
const userPrevPath = require('./sessionMiddleware');
let secret;

try {
  secret = require('../../secret');
}
catch (err){
  console.log('No secret file found...checking process.env');
  if (process.env.STACK_CLIENT_ID && process.env.STACK_CLIENT_SECRET && process.env.STACK_KEY && process.env.STACK_CALLBACK) {
    secret = {
      STACK_CLIENT_ID: process.env.STACK_CLIENT_ID,
      STACK_CLIENT_SECRET: process.env.STACK_CLIENT_SECRET,
      STACK_KEY: process.env.STACK_KEY,
      STACK_CALLBACK: process.env.STACK_CALLBACK
    };
    console.log('StackExchange process.env keys found.');
  }
  else {
    console.log('No StackExchange process.env keys found, skipping oAuth.');
  }
}

if (secret) {
  const stackConfig = {
    clientID: secret.STACK_CLIENT_ID,
    clientSecret: secret.STACK_CLIENT_SECRET,
    key: secret.STACK_KEY,
    callbackURL: secret.STACK_CALLBACK
  };

  const strategy = new Strategy(stackConfig, (accessToken, refreshToken, profile, done) => {
    const stackId = profile.id;
    const email = profile.email;
    const firstName = profile.display_name;
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
  .get('/', userPrevPath, passport.authenticate('stackexchange'))
  .get('/callback', passport.authenticate('stackexchange', {
    successReturnToOrRedirect: '/home',
    failureRedirect: '/login'
  }));
