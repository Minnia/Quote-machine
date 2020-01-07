import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import { QuoteWrapper, ShareQuoteDiv } from "./styled";
import { useSelector } from "react-redux";

const Quotes = () => {
  const { quotes, selectedIndex } = useSelector(state => state.quoteState);
  const randomQuote = quotes[selectedIndex];
  const tweetURL =
    quotes.length &&
    `https://twitter.com/intent/tweet?text=${randomQuote.quote}, ${randomQuote.author}`;

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
          <a style={{ color: "white" }} id="tweet-quote" href={tweetURL}>
            <TwitterIcon />
          </a>
        </div>
      </ShareQuoteDiv>
    </QuoteWrapper>
  );
};

export default Quotes;
