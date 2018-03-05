import React from 'react';
import Link from 'redux-first-router-link';
import style from './style.css';

export default props => (
  <div>
    <h1> PORTFOLIO </h1>
    <div className={style.links}>
      <Link to="Link 1">Link 1</Link>
      <Link to="Link 2">Link 2</Link>
      <Link to="Link 3">Link 3</Link>
    </div>
  </div>
)