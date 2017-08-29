import XNS from '../XNS'

export default (state = { isPinging: false }, action) => {
  switch (action.type) {
    case XNS.PING:
      return { isPinging: true };
    case XNS.PONG:
      return { isPinging: false };
    default:
      return state;
  }
};