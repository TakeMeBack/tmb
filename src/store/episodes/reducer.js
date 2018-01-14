import XNS from '../XNS';

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_EPISODES_FULFILLED":
      return action.payload.Items;

    default:
      return state;
  }
};