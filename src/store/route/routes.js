import XNS from '../XNS'
import {connectRoutes} from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

// import fetchEpisodes from '../episode/actions.js';

const routesMap = {
  "ROUTE_HOME": '/',
  "ROUTE_EPISODES" : {
    path: '/EPISODES',
    thunk: async dispatch=>{
      const response = await fetch('https://19wjbdak7f.execute-api.us-east-1.amazonaws.com/Develop/episodes');
      const episodes = await response.json();
      dispatch({type: "FETCH_EPISODES_FULFILLED", payload: episodes});
    },
  },
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