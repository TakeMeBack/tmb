import XNS from '../XNS';

const fetchUser = username => XNS._create("FETCH_USER", username);
const fetchUserFulfilled = payload => XNS._create("FETCH_USER_FULFILLED", payload);

export default {
  fetchUser,
  fetchUserFulfilled
}