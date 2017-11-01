import React from 'react';
import Link from 'redux-first-router-link';
// import './style.css';

export default props => (
  <div>
    <h1>Take Me Back Radio</h1>
    <h3>{"a sonic journey through time and space".toUpperCase()}</h3>
    <div>
      This website is currently under construction,
      but in the meantime check out the
      {' '}<Link to="/episodes">episodes page</Link>{' '}
      to hear our most recent show!
    </div>
  </div>
)