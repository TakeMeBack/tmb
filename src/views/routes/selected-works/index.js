import React from 'react';
import Link from 'redux-first-router-link';
import style from './style.css';

export default props => (
  <div className={style.container}>
    <Link to="/writing" className={style.back}>&#x2190; back </Link>
    <div className={style.info}>
      A selection of Sam's writings
    </div>
    <div className={style.comingSoon}>
      Coming Soon
    </div>
    {/* <div className={style.links}>
      <div className={style.section}>
        <a href="http://www.google.com" target="_blank">Link One</a>
      </div>
      <div className={style.section}>
        <a href="http://www.google.com" target="_blank">Link Two</a>
      </div>
      <div className={style.section}>
        <a href="http://www.google.com" target="_blank">Link Three</a>
      </div>
    </div> */}
  </div>
)