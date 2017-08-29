import React from 'react';
import {connect} from 'react-redux';
import {NOT_FOUND} from 'redux-first-router';
import {
  ROUTE_HOME,
  ROUTE_EPISODES,
  ROUTE_BLOG,
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_ADMIN,
} from '../../../store/route/actions';
import XNS from '../../../store/XNS';

import Home from './home';
import About from './about';

const routesMap = {
  "ROUTE_HOME": Home,
  // [ROUTE_EPISODES]: Episodes,
  // [ROUTE_BLOG]: Blog,
  "ROUTE_ABOUT": About,
  // [ROUTE_CONTACT]: Contact,
  // [ROUTE_ADMIN]: Admin,
  [NOT_FOUND]: Home
}


const stateToProps = state => ({
  route: state.location.type,
})

const Container = (props) => {
  console.log('props:',props);
  console.log('route:',props.route, routesMap[props.route]);
  // const Route = routesMap[route] || routesMap[NOT_FOUND];
  const Route = routesMap[props.route]
    ? routesMap[props.route]
    : routesMap[NOT_FOUND]
  return (
    <Route />
  )
}

export default connect(stateToProps)(Container)