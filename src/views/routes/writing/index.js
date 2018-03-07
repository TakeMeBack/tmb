import React from 'react';
import Link from 'redux-first-router-link';
import style from './style.css';

export default props => (
  <div className={style.container}>
    <h1> SAM'S WRITING </h1>
    <div className={style.links}>
      <div className={style.section}>
        <Link to="/kcrw">Morning Edition for KCRW</Link>
      </div>
      <div className={style.section}>
        <Link to="/selected-works">Selected Works</Link>
      </div>
    </div>
  </div>
)