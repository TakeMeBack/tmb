import React from 'react';
import style from './style.css';
import { connect } from 'react-redux';


const Episodes = props => (
  <div className={style.container}>
    <div className={style.header}>EPISODES</div>
    <div className={style.list}>
      {props.episodes.map(episode=>{
        return(
          <div className={style.episode}
            onClick={()=>props.setSong({url: episode.url.S})}
            key={episode.episode_id.S}>
            <div className={style.title}>
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