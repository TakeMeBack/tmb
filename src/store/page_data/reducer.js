export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_HOME_DATA_FULFILLED":
      return {home:action.payload.Items[0]}
    case "FETCH_ABOUT_DATA_FULFILLED":
      return {about:action.payload.Items[0]}

    default:
      return state;
  }
};