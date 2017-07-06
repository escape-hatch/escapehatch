const passport = require('passport');
const router = require('express').Router();
const GithubStrategy = require('passport-github2').Strategy;
const User = require('../db/models/user');
const userPrevPath = require('./sessionMiddleware');
let secret;

try {
  secret = require('../../secret');
}
catch (err){
  console.log('No GitHub secret file found...checking process.env');
  if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET && process.env.GITHUB_CALLBACK) {
    secret = {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
      GITHUB_CALLBACK: process.env.GITHUB_CALLBACK
    };
    console.log('GitHub process.env keys found.');
  }
  else {
    console.log('No GitHub process.env keys found, skipping oAuth.');
  }
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
  .get('/', userPrevPath, passport.authenticate('github', { scope: ['user:email']} ))
  .get('/callback', passport.authenticate('github', {
    successReturnToOrRedirect: '/home',
    failureRedirect: '/login'
  }));
