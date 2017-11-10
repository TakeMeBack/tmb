import React from 'react';
import './style.css';
import { connect } from 'react-redux';


const Episodes = props => (
  <div className="episode_container">
    <div className="episode_header">EPISODES</div>
    <div className="episode_list">
      {props.episodes.map(episode=>{
        return(
          <div className="episode"
            onClick={()=>props.setSong({url: episode.url.S})}
            key={episode.episode_id.S}>
            <div className="episode_title">
              {episode.time.S}: {episode.place.S}
            </div>
            <div>{episode.description.S}</div>
          </div>
        )
      })}
    </div>
  </div>
)
const stateToProps = state => state;

const dispatchToProps = dispatch => {
    return {
      setSong: payload => dispatch({type:"SET_SONG", payload}),
    }
}

export default connect(stateToProps, dispatchToProps)(Episodes);