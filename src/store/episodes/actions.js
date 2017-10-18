import XNS from '../XNS';

const fetchEpisodes = () => XNS._create("FETCH_EPISODES");
const fetchEpisodesFulfilled = payload => XNS._create("FETCH_EPISODES_FULFILLED", payload);

export default {
  fetchEpisodes,
  fetchEpisodesFulfilled
}