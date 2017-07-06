const passport = require('passport');
const router = require('express').Router();
const GithubStrategy = require('passport-github2').Strategy;
const User = require('../db/models/user');
let secret;

try {
  secret = require('../../secret');
}
catch (err){
  console.log('No secret file found. Skipping OAuth.');
}

if (secret) {
  const githubConfig = {
    clientID: secret.GITHUB_CLIENT_ID,
    clientSecret: secret.GITHUB_CLIENT_SECRET,
    callbackURL: secret.GITHUB_CALLBACK
  };

  const strategy = new GithubStrategy(githubConfig, (accessToken, refreshToken, profile, done) => {
    const githubId = profile.id;
    const email = profile.email;
    const firstName = profile._json.name;
    User.findOrCreate({
      where: { githubId },
      defaults: { email, firstName }
    })
    .spread( user => done(null, user))
    .catch(done);
  });

  passport.use(strategy);
}

module.exports = router
  .get('/', passport.authenticate('github', { scope: ['user:email']} ))
  .get('/callback', passport.authenticate('github', {
    successRedirect: '/home',
    failureRedirect: '/login'
  }));
