import React from 'react';
import style from './style.css';
import { connect } from 'react-redux';

const HOMELESS_URL = "https://s3.us-east-2.amazonaws.com/takemebackradio.com/public/kcrw/HomelessHousing.mp3";

const COLOMBIA_URL = " https://s3.us-east-2.amazonaws.com/takemebackradio.com/public/kcrw/Colombia+Take+Me+Back+Excerpt.mp3";

const Reporting = props => (
  <div className={style.container}>
    <h1> Sam's Reporting </h1>
    <div className={style.sections}>
      <div className={style.section}>
        <div className={style.title}>"Housing the Homeless"</div>
        <div className={style.button}>
          <button onClick={()=>props.setAudio({
            url: HOMELESS_URL,
            title: "Housing The Homeless"
          })}>{props.src == HOMELESS_URL ? "Now Playing" : "Play Now"}</button>
        </div>
        <div className={style.detail}>
          A report for KCRW on overcoming NIMBYism to build housing for the homeless
        </div>
      </div>
      <div className={style.section}>
        <div className={style.title}>"A History of Colombian Music"</div>
        <div className={style.button}>
          <button onClick={()=>props.setAudio({
            url: COLOMBIA_URL,
            title: "A History of Colombian Music"
          })}>{props.src == COLOMBIA_URL ? "Now Playing" : "Play Now"}</button>
        </div>
        <div className={style.detail}>
          An exploration of the the evolution of Colombian music
        </div>
      </div>
    </div>
  </div>
);

const stateToProps = state => state.player;

const dispatchToProps = dispatch => {
    return {
      setAudio: payload => dispatch({type:"SET_SONG", payload}),
    }
}

export default connect(stateToProps, dispatchToProps)(Reporting);