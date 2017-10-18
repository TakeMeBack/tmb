import React from 'react';
import Link from 'redux-first-router-link';
import Player from '../player/container.js';
import './style.css';

export default props => {
  return(
    <div className="header">
      <div className="links">
        <Link to="/episodes" className="link">EPISODES</Link>
        <Link to="/blog" className="link">BLOG</Link>
        <Link to="/home" className="link">TAKE ME BACK!</Link>
        <Link to="/about" className="link">ABOUT</Link>
        <Link to="/contact" className="link">CONTACT</Link>
      </div>
      <div className="player">
        <Player />
      </div>
    </div>
  )
}