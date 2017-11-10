import XNS from '../XNS';

const fetchPageData = () => XNS._create("FETCH_PAGE_DATA");
const fetchPageDataFulfilled = payload => XNS._create("FETCH_PAGE_DATA_FULFILLED", payload);

export default {
  fetchPageData,
  fetchPageDataFulfilled
}