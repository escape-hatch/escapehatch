import { combineReducers } from 'redux';
import user from './user';
import link from './link';

export default combineReducers({ user, link });

console.log('test');
