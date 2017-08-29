import { combineReducers } from 'redux';
import { reducer as location } from './route/routes.js';
import ping from './ping/reducer';
import users from './user/reducer';


export default combineReducers({
  location,
  ping,
  users
});