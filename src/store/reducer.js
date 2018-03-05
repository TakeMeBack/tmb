import { combineReducers } from 'redux';
import { reducer as location } from './route/routes.js';
import player from './player/reducer';
import episodes from './episodes/reducer';
import page_data from './page_data/reducer';


export default combineReducers({
  location,
  player,
  episodes,
  page_data
});