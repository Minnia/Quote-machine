import React from "react";
import { useSelector } from "react-redux";
import Body from "./components/Background";
import Button from "./components/Button";
import Quotes from "./components/Quotes";
import actions from "./redux/actions";
import { store } from "./redux/store";

const App = () => {
  const quotes = useSelector(state => state.quote);

  const getQuotes = () => {
    store.dispatch(actions.quotes.getQuotes());
    console.log("hello", quotes);
  };
  return (
    <Body>
      <div>
        <Quotes />
        <Button getQuote={getQuotes} />
        {/* <p quote={quote}></p> */}
      </div>
    </Body>
  );
};

export default App;
