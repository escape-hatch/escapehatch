import 'babel-polyfill';
import reducer from './link';
import { expect } from 'chai';

describe('links reducer', () => {
  describe('GET_LINKS', () => {
    it('should retrieve search results from git and stack APIs', () => {
      const initialState = {
        currentLinks: []
      };
      const action = {
        type: 'GET_LINKS',
        links: ['i\'m just a link', 'yes i\'m only a link', 'and i\'m sitting here on capitol hill'],
      };
      const nextState = reducer(initialState, action);

      expect(nextState.currentLinks).to.deep.equal(['i\'m just a link', 'yes i\'m only a link', 'and i\'m sitting here on capitol hill']);
    });

    it('should not retrieve anything if no search results for queried error', () => {
      const initialState = {
        currentLinks: []
      };
      const action = {
        type: 'GET_LINKS',
        links: [],
      };
      const nextState = reducer(initialState, action);

      expect(nextState.currentLinks).to.deep.equal([]);
    });
  });
});
