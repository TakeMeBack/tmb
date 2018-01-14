import { connect } from 'react-redux';
import Player from './player';
import { PLAY, PAUSE } from 'store/player/actions';

const stateToProps = state => state.player;

const dispatchToProps = dispatch => {
  return {
    pressPlay: () => {dispatch(PLAY)},
    pressPause: () => {dispatch(PAUSE)},
  }
}

export default connect(stateToProps, dispatchToProps)(Player)