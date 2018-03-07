import React from 'react';
import Link from 'redux-first-router-link';
import Player from '../player/container.js';
import style from './style.css';

const BASE_URL = "https://s3.us-east-2.amazonaws.com/takemebackradio.com/public/assets/";

export default props => {
  return(
    <div className={style.header}>
      <div className={style.links}>
        <Link to="/" className={style.link}>
          <img src={BASE_URL+"tmb_banner.jpg"}/>
        </Link>
        <Link to="/episodes" className={style.link}>EPISODES</Link>
        <Link to="/about" className={style.link}>ABOUT</Link>
        <Link to="/portfolio" className={style.link}>SAM'S PORTFOLIO</Link>
        <Link to="/contact" className={style.link}>CONTACT</Link>
      </div>
      <div className={style.player}>
        <Player />
      </div>
    </div>
  )
}