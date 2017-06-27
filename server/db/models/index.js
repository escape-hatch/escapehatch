const User = require('./user');
const Err = require('./err');
const Link = require('./link');
const user_links = require('./user_links');

User.belongsToMany(Err, {through: 'user_err'});
User.belongsToMany(Link, {through: 'user_links'});

Err.belongsToMany(Link, {through: 'err_link'});
/*
adds the following methods to Err:
  - getLinks
  - setLinks
  - addLink
  - addLinks
*/

