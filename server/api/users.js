const router = require('express').Router();
const User = require('../db').model('user');
module.exports = router;

// router.param('id', (req, res, next, id) => {
//   User.findById(id)
//     .then(user => {
//       if(!user) {
//         const err = 'User not found!';
//         err.status = 404;
//         throw err;
//       }
//     req.user = user;
//     next();
//     return null;
//     })
//     .catch(next);
// })

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      if(!user) {
        res.sendStatus(404);
      }
      else {
        res.send(user);
      }
    })
    .catch(next)
});

router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(newUser => res.status(201).send(newUser))
  .catch(next);
})
