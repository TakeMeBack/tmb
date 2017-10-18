import XNS from '../XNS'

const defaultState = {
  isPlaying: false,
  src: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case XNS.PLAY:
      return state.src
        ? { ...state, isPlaying: true }
        : state;
    case XNS.PAUSE:
      return { ...state, isPlaying: false };
    case XNS.SET_SONG:
      return { 
        ...state, 
        isPlaying: true,
        src: action.payload.url
      };
    default:
      return state;
  }
};