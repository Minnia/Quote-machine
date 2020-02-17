import { GET_QUOTE, GET_QUOTE_SUCCESS, GET_QUOTE_FAILURE } from "./types";

import { db } from "../../firebase";
//Real-time listener
export const getQuotes = () => async dispatch => {
  try {
    dispatch({ type: GET_QUOTE });
    const ref = await db
      .collection("quotes")
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.data()));
    const randomIndex = Math.floor(Math.random() * ref.length);
    dispatch({
      type: GET_QUOTE_SUCCESS,
      payload: { quotes: ref, selectedIndex: randomIndex }
    });
  } catch (err) {
    dispatch({ type: GET_QUOTE_FAILURE, error: err.message });
  }
};
