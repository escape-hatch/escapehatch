import chai from 'chai';
const expect = chai.expect;
const Promise = require('bluebird')
const stackApp = require('./request')
const formatter = require('./formatter')


describe('Stack Exchange API:', () => {
  let result = {
    items: [{
      tags: [
        'javascript',
        'mysql',
        'node.js',
        'sequelize.js',
        'backend'
      ],
      'is_answered': false,
      'view_count': 20,
      'answer_count': 1,
      'score': 0,
      'last_activity_date': 1498246923,
      'creation_date': 1498245738,
      'last_edit_date': 1498246923,
      'question_id': 44728607,
      'link': 'https://stackoverflow.com/questions/44728607/query-sequelize-table-without-column-id',
      'title': 'Query sequelize table without column &#39;id&#39;'
    }]
  }

  describe('request.js', () => {

    it('is a function', () => expect(stackApp).to.be.a('function'))

    it('returns an object', () => expect(result).to.be.an.instanceof(Object))

    describe('the returned object: ', () => {

      it('has \'items\' as a property', () =>
        expect(result).to.haveOwnPropertyDescriptor('items'))

      it('the \'items\' property has a length of one', () =>
         expect(result.items).to.have.lengthOf(1))
    })

  })

  describe('format.js', () => {
    let items

    before(() => items = formatter(result.items))

    it('is a function', () => expect(formatter).to.be.a('function'))

    it('returns an object', () => expect(items).to.be.an.instanceOf(Array))

    it('the returned object is formatted', () => {
      expect(items[0]).to.have.all.keys('url',
                                    'body',
                                    'title',
                                    'answered',
                                    'vendor_id',
                                    'created',
                                    'modified',
                                    'comments',
                                    'score',
                                    'views',
                                    'tags',
                                    'vendor',
                                    'error'
                                    )
    })
  })
})
