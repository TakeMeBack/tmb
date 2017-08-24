import { combineReducers } from 'redux';
import ping from './ping/reducer';
import users from './user/reducer';


export default combineReducers({
  ping,
  users
});