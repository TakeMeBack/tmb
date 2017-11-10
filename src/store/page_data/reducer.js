import XNS from '../XNS';

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_HOME_DATA_FULFILLED":
      return {home:action.payload.Items[0]}//.Items;

    default:
      return state;
  }
};