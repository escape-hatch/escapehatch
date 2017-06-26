const User = require('./user');
const Err = require('./err');
const Link = require('./link');

User.belongsToMany(Err, {through: 'user_err'});
User.belongsToMany(Link, {through: 'user_link'});

Err.belongsToMany(Link, {through: 'err_link'});
