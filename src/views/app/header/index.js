import React from 'react';
import Link from 'redux-first-router-link';
import Player from '../player/container.js';
import style from './style.css';

export default props => {
  return(
    <div className={style.header}>
      <div className={style.links}>
        <Link to="/" className={style.link}>HOME</Link>
        <Link to="/episodes" className={style.link}>EPISODES</Link>
        <Link to="/blog" className={style.link}>BLOG</Link>
        <Link to="/about" className={style.link}>ABOUT</Link>
        <Link to="/contact" className={style.link}>CONTACT</Link>
      </div>
      <div className={style.player}>
        <Player />
      </div>
    </div>
  )
}