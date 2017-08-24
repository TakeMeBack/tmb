import { combineEpics } from 'redux-observable';
import pingEpic from './ping/epic';
import fetchUserEpic from './user/epic';

export default combineEpics(
  pingEpic,
  fetchUserEpic
);
