import { GET_QUOTE, GET_QUOTE_SUCCESS, GET_QUOTE_FAILURE } from "./types";

const INITIAL_STATE = {
  quotes: [],
  selectedIndex: 0,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return { ...state, loading: true };
    case GET_QUOTE_SUCCESS:
      console.log("payload: ", action.payload);
      return {
        ...state,
        quotes: action.payload.quotes,
        selectedIndex: action.payload.selectedIndex,
        loading: false
      };
    case GET_QUOTE_FAILURE:
      console.log("l15", action.payload, action.error);
      return { ...state, loading: false };
    default:
      return state;
  }
};
