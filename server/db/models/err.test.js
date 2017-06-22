const { expect } = require('chai');
const db = require('../db');
const Err = db.model('err');

describe('Err model', () => {

  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('', () => {

    describe('', () => {

      let noGoodVeryBad;

      beforeEach(() => {
        return Err.create({
          message: 'Unhandled rejection TypeError: OAuth2Strategy requires a clientID option',
        })
          .then(err => {
            noGoodVeryBad = err;
          });
      });

      it('some expected behavior', () => {
        // expect(noGoodVeryBad(something)).to.be.equal(something else);
      });

    });

  });

});
