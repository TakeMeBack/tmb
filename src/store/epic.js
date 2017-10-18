import { combineEpics } from 'redux-observable';
import pingEpic from './ping/epic';
import fetchUserEpic from './user/epic';
import episodeEpic from './episodes/epic';

export default combineEpics(
  pingEpic,
  fetchUserEpic,
  episodeEpic,
);
