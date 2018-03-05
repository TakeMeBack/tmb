import React from 'react';
import {connect} from 'react-redux';
import {NOT_FOUND} from 'redux-first-router';

import Home from './home';
import Episodes from './episodes';
import Portfolio from './portfolio';
import Contact from './contact';
import Admin from './admin';
import About from './about';

const routesMap = {
  "ROUTE_HOME": Home,
  "ROUTE_EPISODES": Episodes,
  "ROUTE_PORTFOLIO": Portfolio,
  "ROUTE_ABOUT": About,
  "ROUTE_CONTACT": Contact,
  "ROUTE_ADMIN": Admin,
  [NOT_FOUND]: Home
};


const stateToProps = state => ({
  route: state.location.type,
})

const Container = ({route}) => {
  const Route = routesMap[route] || routesMap[NOT_FOUND];
  return (
    <Route />
  )
}

export default connect(stateToProps)(Container)