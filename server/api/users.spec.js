const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const User = db.model('user');

describe('User routes', () => {

  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('/api/users/', () => {
    const codysFirstName = 'Cody';
    const codysLastName = 'Smith';
    const codysEmail = 'cody@workingonit.com';
    const jensFirstName = 'Jen';
    const jensLastName = 'Tam';
    const jensEmail = 'jen@jen.com';

    beforeEach(() => {
      return User.create({
        firstName: codysFirstName,
        lastName: codysLastName,
        email: codysEmail,
      })
      .then(() => {
        User.create({
          firstName: jensFirstName,
          lastName: jensLastName,
          email: jensEmail,
        })
      });
    });

    describe('GET /api/users', () => {
      it('retrieves all users', () => {
        return request(app)
        .get('/api/users')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].email).to.be.equal(codysEmail);
          expect(res.body[0].firstName).to.be.equal(codysFirstName);
          expect(res.body[0].lastName).to.be.equal(codysLastName);
          expect(res.body[1].email).to.be.equal(jensEmail);
          expect(res.body[1].firstName).to.be.equal(jensFirstName);
          expect(res.body[1].lastName).to.be.equal(jensLastName);
        })
      });
    });

    describe('GET /api/users/:id', () => {
      it('retrieves selected user', () => {
        return request(app)
        .get('/api/users/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.id).to.be.equal(1);
          expect(res.body.firstName).to.be.equal(codysFirstName);
          expect(res.body.lastName).to.be.equal(codysLastName);
          expect(res.body.email).to.be.equal(codysEmail);

        })
      });

      it('retrieves a different selected user', () => {
        return request(app)
        .get('/api/users/2')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.id).to.be.equal(2);
          expect(res.body.firstName).to.be.equal(jensFirstName);
          expect(res.body.lastName).to.be.equal(jensLastName);
          expect(res.body.email).to.be.equal(jensEmail);
        })
      });

      it('fails with a 401 when user not logged in', () => {
        return request(app)
        // .get('/api/users/???')
        // .expect(401)
        // .then(res => {
        //   // ?
        // })
      });
    });

    describe('POST /api/users', () => {
      it('creates a user', () => {
        return request(app)
        .post('/api/users')
        .expect(200)
        .then(res => {
          // should create a user
        })
      });
    });

  });

});
