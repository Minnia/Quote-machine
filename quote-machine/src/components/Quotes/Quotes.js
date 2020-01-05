import React from "react";
//Remember to import styled components here
import { QuoteWrapper } from "./styled";
import { useSelector } from "react-redux";

const Quotes = () => {
  const quotes = useSelector(state => state.quote);
  console.log("7", quotes);
  return (
    <QuoteWrapper id="quote-box">
      {quotes.quote &&
        quotes.quote.map(quote => (
          <ul style={{ "list-style-type": "none" }}>
            <li>{quote.quote}</li>
          </ul>
        ))}
    </QuoteWrapper>
  );
};

export default Quotes;
