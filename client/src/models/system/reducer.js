import { networkRequest, networkResponse } from './actions';

const initState = {
  loading: false,
};

export default (state = initState, { type }) => {
  switch (type) {
    case networkRequest.type:
      return {
        ...state,
        loading: true,
      };
    case networkResponse.type:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
