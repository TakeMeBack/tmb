import React from 'react';
import Link from 'redux-first-router-link';
import style from './style.css';

export default props => (
  <div className={style.container}>
    <h1> SAM'S PORTFOLIO </h1>
    <div className={style.info}>
      These pages contain examples of Sam's work.
      <br/>Full episodes can be found on the
      {" "}<Link to="/episodes">Episodes</Link>{" "}
      page.
    </div>
    <div className={style.links}>
      <div className={style.section}>
        <Link to="/writing">Writing</Link>
        <div className={style.detail}>A sampling of Sam's writing</div>
      </div>
      <div className={style.section}>
        <Link to="/reporting">Reporting</Link>
        <div className={style.detail}>Examples of Sam's reporting</div>
      </div>
      <div className={style.section}>
        <Link to="/hosting">Hosting Highlights</Link>
        <div className={style.detail}>Curated highlights of Sam's anchoring world</div>
      </div>
    </div>
  </div>
)