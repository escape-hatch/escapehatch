import 'babel-polyfill';
import reducer from './link';
import { expect } from 'chai';

describe('links reducer', () => {
  let initialState;
  let action;
  let nextState;

  describe('GET_LINKS', () => {
    beforeEach('retrieve links and error message', () => {
      initialState = {
        currentLinks: {
          error: '',
          github: [],
          stackapp: [],
        }
      };

      action = {
        type: 'GET_LINKS',
        links: {
          error: 'Mayday mayday coming in for a crash landing!',
          github: ['i\'m just a link', 'yes i\'m only a link'],
          stackapp: ['and i\'m sitting here on capitol hill'],
        }
      };

      nextState = reducer(initialState, action);
    })

    it('should retrieve search results from git API', () => {
      expect(nextState.currentLinks.github).to.deep.equal(['i\'m just a link', 'yes i\'m only a link']);
    });

    it('should retrieve search results from stack overflow API', () => {
      expect(nextState.currentLinks.stackapp).to.deep.equal(['and i\'m sitting here on capitol hill']);
    });

    it('should retrieve original error message', () => {
      expect(nextState.currentLinks.error).to.equal('Mayday mayday coming in for a crash landing!');
    });

    it('should not retrieve any links if no search results for queried error', () => {
      action = {
        type: 'GET_LINKS',
        links: {
          error: 'Mayday mayday coming in for a crash landing!',
          github: [],
          stackapp: [],
        },
      };
      nextState = reducer(initialState, action);

      expect(nextState.currentLinks.github).to.deep.equal([]);
      expect(nextState.currentLinks.stackapp).to.deep.equal([]);
    });
  });
});
