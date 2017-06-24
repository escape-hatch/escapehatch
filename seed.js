const db = require('./server/db')
const User = require('./server/db/models/user')
const Err = require('./server/db/models/err')
const Link = require('./server/db/models/link')
const Vote = require('./server/db/models/vote')

const data = {
  user: [
    {
      firstName: 'Jen',
      lastName: 'Smith',
      email: 'jen@jen.com',
      password: '1234',
    },
    {
      firstName: 'Bob',
      lastName: 'Jones',
      email: 'bob@bob.com',
      password: '1234',
    },
    {
      firstName: 'Dave',
      lastName: 'Jones',
      email: 'dave@dave.com',
      password: '1234',
    },
  ],
  err: [

  ]
}

db.sync()
.then(() => {
  return db.sync({force: true})
  // return db.sync()
})
.then( () => {return User.bulkCreate(data.user)})
.then(function () {
  console.log("Finished inserting data");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close()
  console.log('connection closed');
  return null;
});
