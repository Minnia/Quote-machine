import React from "react";
import "./index.css";
import Body from "./components/Background";
import Button from "./components/Button";
import Quotes from "./components/Quotes";
import actions from "./redux/actions";
import { store } from "./redux/store";

const App = () => {
  const getQuotes = () => {
    console.log("getting quotes");
    store.dispatch(actions.quotes.getQuotes());
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
