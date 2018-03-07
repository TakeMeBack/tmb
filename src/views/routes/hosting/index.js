import React from 'react';
import style from './style.css';
import { connect } from 'react-redux';

const Hosting = props => (
  <div className={style.container}>
    <h1> Sam's Reporting </h1>
    <div className={style.info}>
      A collection of highlights to showcase
      <br/> Sam holding it down as an anchor
    </div>
    <div className={style.comingSoon}>Coming Soon!</div>
    {/* <div className={style.sections}>
      <div className={style.section}>
        <div className={style.title}>"Housing the Homeless"</div>
        <div className={style.button}>
          <button onClick={()=>props.setAudio({
            url: "https://archive.org/download/testmp3testfile/mpthreetest.mp3",
            title: "Housing The Homeless"
          })}> Play Now</button>
        </div>
        <div className={style.detail}>
          A report for KCRW on overcoming NIMBYism to build housing for the homeless
        </div>
      </div>
      <div className={style.section}>
        <div className={style.title}>"A History of Colombian Music"</div>
        <div className={style.button}>
          <button onClick={()=>props.setAudio({
            url: "https://archive.org/download/testmp3testfile/mpthreetest.mp3",
            title: "A History of Colombian Music"
          })}> Play Now</button>
        </div>
        <div className={style.detail}>
          An exploration of the the evolution of Colombian music
        </div>
      </div>
    </div> */}
  </div>
);

const stateToProps = state => state;

const dispatchToProps = dispatch => {
    return {
      setAudio: payload => dispatch({type:"SET_SONG", payload}),
    }
}

export default connect(stateToProps, dispatchToProps)(Hosting);