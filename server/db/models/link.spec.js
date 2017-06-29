
const { expect } = require('chai');
const db = require('../db');
const Link = db.model('link');
const Err = db.model('err')
const seed = require('../../../seed')

describe('Link model', () => {

  beforeEach(seed);

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

      it('returns a promise', () => expect(link).to.be.an.instanceof(Promise))

      it('returns an object', () => {
        return link.then(res => {
          expect(res).to.be.an.instanceOf(Object)
        })
      });

      it('updates expected tables', () => {
        return link.then(res => {
          Err.find({
            where: {
              type: 'TypeError',
              message: 'Assignment to constant variable.'
            }
          })
          .then(err =>
            expect(err.dataValues).to.haveOwnPropertyDescriptor('message')
          )
        })
      });
    });
  });
});
