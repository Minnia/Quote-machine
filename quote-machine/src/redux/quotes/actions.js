import { GET_QUOTE, GET_QUOTE_SUCCESS, GET_QUOTE_FAILURE } from "./types";

import { db } from "../../firebase";
//Real-time listener
export const getQuotes = () => async dispatch => {
  try {
    dispatch({ type: GET_QUOTE });
    const ref = await db
      .collection("quotes")
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          console.log(doc.data());
          return doc.data();
        });
      });

    // const quotesToReturn = quotes.map(quote => quote.data());

    console.log("18", ref);
    dispatch({ type: GET_QUOTE_SUCCESS, payload: ref });
  } catch (err) {
    dispatch({ type: GET_QUOTE_FAILURE, error: err.message });
  }
};
