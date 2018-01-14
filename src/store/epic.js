import { combineEpics } from 'redux-observable';
import pingEpic from './ping/epic';
import fetchUserEpic from './user/epic';
import episodeEpic from './episodes/epic';
import pageDataEpic from './page_data/epic';

export default combineEpics(
  pingEpic,
  fetchUserEpic,
  episodeEpic,
);
