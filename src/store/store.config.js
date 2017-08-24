import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epic';
import rootReducer from './reducer';
import { compose } from 'redux';

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(epicMiddleware)
)

const store = createStore(
  rootReducer,
  enhancers
);

export default store;