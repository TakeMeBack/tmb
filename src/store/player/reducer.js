import XNS from '../XNS'

const defaultState = {
  isPlaying: false,
  src: "https://s3.us-east-2.amazonaws.com/takemebackradio.com/temp/Com+Truise+-+Iteration+(Full+Album).mp3",
}

export default (state = defaultState, action) => {
  console.log(action.type)
  switch (action.type) {
    case XNS.PLAY:
      return { ...state, isPlaying: true };
    case XNS.PAUSE:
      return { ...state, isPlaying: false };
    default:
      return state;
  }
};