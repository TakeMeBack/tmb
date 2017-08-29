import XNS from '../XNS'
import {connectRoutes} from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

const routesMap = {
  "ROUTE_HOME": '/',
  "ROUTE_EPISODES" : '/EPISODES',
  "ROUTE_BLOG" : '/BLOG',
  "ROUTE_ABOUT" : '/ABOUT',
  "ROUTE_CONTACT" : '/CONTACT',
  "ROUTE_ADMIN" : '/ADMIN',
};

const history = createHistory();

export const {
  reducer,
  middleware,
  enhancer
} = connectRoutes(history, routesMap);