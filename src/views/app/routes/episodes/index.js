import React from 'react';
import './style.css';
import { connect } from 'react-redux';

// import { PLAY, SET_SONG } from '../../../../store/player/actions';

const Episodes = props => (
  <div>
    <h1>EPISODES</h1>
    {props.episodes.map(episode=>{
      return(
        <div className="episode"
          onClick={()=>props.setSong({url: episode.url.S})}
          key={episode.episode_id.S}>
          <h3>
            {episode.episode_id.S}
          </h3>
          <div>{episode.description.S}</div>
          <div>
            Play Now!
          </div>
        </div>
      )
    })}
  </div>
)
const stateToProps = state => state;

const dispatchToProps = dispatch => {
    return {
      setSong: payload => dispatch({type:"SET_SONG", payload}),
      // play: () => dispatch({type:"PLAY"})
    }
}

export default connect(stateToProps, dispatchToProps)(Episodes);