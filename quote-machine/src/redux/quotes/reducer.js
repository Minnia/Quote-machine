import { GET_QUOTE, GET_QUOTE_SUCCESS, GET_QUOTE_FAILURE } from "./types";

const INITIAL_STATE = {
  quote: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return { ...state, loading: true };
    case GET_QUOTE_SUCCESS:
      console.log("l13", action.payload);
      return { ...state, quote: action.payload, loading: false };
    case GET_QUOTE_FAILURE:
      console.log("l15", action.payload, action.error);
      return { ...state, loading: false };
    default:
      return state;
  }
};
