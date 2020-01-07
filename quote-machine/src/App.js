import React, { useEffect } from "react";
import "./index.css";
import Background from "./components/Background";
import Button from "./components/Button";
import Quotes from "./components/Quotes";
import actions from "./redux/actions";
import { store } from "./redux/store";

const App = () => {
  const getQuotes = () => {
    console.log("getting quotes");
    store.dispatch(actions.quotes.getQuotes());
  };

  useEffect(() => {
    store.dispatch(actions.quotes.getQuotes());
  }, []);

  return (
    <Background>
      <Quotes />
      <Button getQuote={getQuotes} />
    </Background>
  );
};

export default App;
