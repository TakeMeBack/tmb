import actions from '../actions';

const fetchUser = username => actions._create("FETCH_USER", username);
const fetchUserFulfilled = payload => actions._create("FETCH_USER_FULFILLED", payload);

export default {
  fetchUser,
  fetchUserFulfilled
}