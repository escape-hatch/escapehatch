const User = require('./user');
const Err = require('./err');
const Link = require('./link');
const Vote = require('./vote');

User.belongsToMany(Err, {through: 'user_err'});
User.belongsToMany(Link, {through: 'user_link'});
User.belongsToMany(Vote, {through: 'user_vote'});

Err.belongsToMany(Link, {through: 'err_link'});

Vote.belongsToMany(Link, {through: 'vote_link'});

