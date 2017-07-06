const passport = require('passport');
const router = require('express').Router();
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../db/models/user');
const userPrevPath = require('./sessionMiddleware');

let secret;

try {
  secret = require('../../secret');
}
catch (err){
  console.log('No secret file found...checking process.env');
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_CALLBACK) {
    secret = {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      GOOGLE_CALLBACK: process.env.GOOGLE_CALLBACK
    };
    console.log('Google process.env keys found.');
  }
  else {
    console.log('No Google process.env keys found, skipping oAuth.');
  }
}

if (secret) {
  const googleConfig = {
    clientID: secret.GOOGLE_CLIENT_ID,
    clientSecret: secret.GOOGLE_CLIENT_SECRET,
    callbackURL: secret.GOOGLE_CALLBACK
  };

  const strategy = new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
    const googleId = profile.id;
    const firstName = profile.displayName;
    const email = profile.emails[0].value;
    User.findOrCreate({
      where: { googleId },
      defaults: { email, firstName }
    })
    .spread( user => done(null, user))
    .catch(done);
  });

  passport.use(strategy);
}

module.exports = router
  .get('/', userPrevPath, passport.authenticate('google', { scope: 'email' }))
  .get('/callback', passport.authenticate('google', {
    successReturnToOrRedirect: '/home',
    failureRedirect: '/login'
  }));
