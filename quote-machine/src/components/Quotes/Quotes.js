import React from "react";
import { QuoteWrapper, ShareQuoteDiv } from "./styled";
import { useSelector } from "react-redux";

const Quotes = () => {
  const { quotes, selectedIndex } = useSelector(state => state.quoteState);
  const randomQuote = quotes[selectedIndex];

  return (
    <QuoteWrapper id="quote-box">
      {quotes.length > 0 && (
        <div id="new-quote">
          <ul style={{ listStyleType: "none" }}>
            <li id="text">{randomQuote.quote}</li>
            <li id="author">-{randomQuote.author}</li>
          </ul>
        </div>
      )}

      <ShareQuoteDiv>
        <div>
          <a id="tweet-quote">Share quote</a>
        </div>
      </ShareQuoteDiv>
    </QuoteWrapper>
  );
};

export default Quotes;
