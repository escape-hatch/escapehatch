import chai from 'chai';
const expect = chai.expect;
const Promise = require('bluebird')
const github = require('./request')
const formatter = require('./formatter')


describe('GitHub API:', () => {
  let result

  before(() => { result = github('sequelize error') })

  describe('request.js', () => {

    it('is a function', () => expect(github).to.be.a('function'))

    it('returns a promise', () => expect(result).to.be.an.instanceof(Promise))

    describe('the returned promise object: ', () => {

      it('is an object', () =>
        result
        .then(res => expect(res).to.be.an.instanceOf(Object))
      )

      it('has \'items\' as a property', () =>
        result
        .then(res => expect(res).to.haveOwnPropertyDescriptor('items'))
      )

      xit('the \'items\' property is limited to 50 items', () =>
        result
        .then(res => expect(res.items).to.have.lengthOf(50))
      )

    })

  })

  describe('format.js', () => {
    let items

    before(() => result.then(res => { items = formatter(res.items) }))

    it('is a function', () => expect(formatter).to.be.a('function'))

    it('returns an object', () => expect(items).to.be.an.instanceOf(Array))

    xit('the returned object is formatted', () => {
      expect(items[0]).to.have.all.keys('url',
                                    'body',
                                    'title',
                                    'status',
                                    'id',
                                    'posted_on',
                                    'updated_on',
                                    'comments')
    })
  })
})
