import React from 'react';
import Link from 'redux-first-router-link';
import style from './style.css';

export default props => (
  <div className={style.container}>
    <Link to="/writing" className={style.back}>&#x2190; back </Link>
    <div className={style.info}>
      Below is a selection of Sam's writings for NPR affiliate KCRW's{" "}
      <a href="https://www.kcrw.com/news-culture/shows/morning-edition" target="_blank"> 
      <i>Morning Edition</i>
      </a>
    </div>
    <div className={style.comingSoon}>Coming Soon!</div>
    {/* <div className={style.links}>
      <div className={style.section}>
        <a href="http://www.google.com" target="_blank">Story One</a> - mm/dd/yyyy
      </div>
      <div className={style.section}>
        <a href="http://www.google.com" target="_blank">Story Two</a> - mm/dd/yyyy
      </div>
      <div className={style.section}>
        <a href="http://www.google.com" target="_blank">Story Three</a> - mm/dd/yyyy
      </div>
    </div> */}
  </div>
)