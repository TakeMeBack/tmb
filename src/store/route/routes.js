import {connectRoutes} from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

// import fetchEpisodes from '../episode/actions.js';

const routes = {
  "ROUTE_HOME": {
    path: '/',
    thunk: async dispatch=>{
      const response = await fetch('https://19wjbdak7f.execute-api.us-east-1.amazonaws.com/Develop/home');
      const home_data = await response.json();
      dispatch({type: "FETCH_HOME_DATA_FULFILLED", payload: home_data});
    },
  },
  "ROUTE_EPISODES" : {
    path: '/EPISODES',
    thunk: async dispatch=>{
      const response = await fetch('https://19wjbdak7f.execute-api.us-east-1.amazonaws.com/Develop/episodes');
      const episodes = await response.json();
      dispatch({type: "FETCH_EPISODES_FULFILLED", payload: episodes});
    },
  },
  "ROUTE_ABOUT" : {
    path: '/ABOUT',
    thunk: async dispatch=>{
      const response = await fetch('https://19wjbdak7f.execute-api.us-east-1.amazonaws.com/Develop/about');
      const about_data = await response.json();
      dispatch({type: "FETCH_ABOUT_DATA_FULFILLED", payload: about_data});
    },
  },
  "ROUTE_PORTFOLIO" : '/PORTFOLIO',
  "ROUTE_WRITING": '/WRITING',
  "ROUTE_KCRW": '/KCRW',
  "ROUTE_SELECTED-WORKS": '/SELECTED-WORKS',
  "ROUTE_REPORTING": '/REPORTING',
  "ROUTE_HOSTING": '/HOSTING',
  "ROUTE_CONTACT" : '/CONTACT',
  "ROUTE_ADMIN" : '/ADMIN',
};

const history = createHistory();

export const {
  reducer,
  middleware,
  enhancer
} = connectRoutes(history, routes);