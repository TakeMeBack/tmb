import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { enhancer, middleware as routesMiddleware} from './route/routes.js';
import rootEpic from './epic';
import rootReducer from './reducer';
import { compose } from 'redux';

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  enhancer, applyMiddleware(epicMiddleware, routesMiddleware)
)

const store = createStore(
  rootReducer,
  enhancers
);

export default store;