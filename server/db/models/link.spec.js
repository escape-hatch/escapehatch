
const { expect } = require('chai');
const db = require('../db');
const Link = db.model('link');

describe.only('Link model', () => {

  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('classMethods', () => {

    describe('propogateLink', () => {

      const info = {
        error: 'TypeError: Assignment to constant variable.',
        vendor: 'github',
        vendor_id: 172854580,
        vote: 'upvote',
        url: 'https://github.com/rezen/assess/issues/1',
        created: '2017-06-18 12:10:37',
        modified: '2017-06-27 12:10:37'
      },
      userId = 1
      let link

      beforeEach(() => {
        link = Link.propogateLink(info, userId)
      });

      it('returns a link object', () => {
        expect(link).to.be.an.instanceOf(Object)
      });

      xit('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false);
      });

    }); // end describe('correctPassword')

  }); // end describe('instanceMethods')

}); // end describe('User model')
