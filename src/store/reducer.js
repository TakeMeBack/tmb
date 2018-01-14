import { combineReducers } from 'redux';
import { reducer as location } from './route/routes.js';
import ping from './ping/reducer';
import users from './user/reducer';
import player from './player/reducer';
import episodes from './episodes/reducer';
import page_data from './page_data/reducer';


export default combineReducers({
  location,
  ping,
  users,
  player,
  episodes,
  page_data
});