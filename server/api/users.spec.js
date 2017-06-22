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

    const codysEmail = 'cody@workingonit.com';
    const jensEmail = 'jen@jen.com';

    beforeEach(() => {
      return User.create({
        email: codysEmail,
      })
      .then(() => {
        User.create({
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
          expect(res.body.email).to.be.equal(codysEmail);
          expect(res.body.id).to.be.equal(1);
        })
      });

      it('retrieves a different selected user', () => {
        return request(app)
        .get('/api/users/2')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.email).to.be.equal(jensEmail);
          expect(res.body.id).to.be.equal(2);
        })
      });
    });

  });

});
