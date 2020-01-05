import React from "react";
import { QuoteButton, ButtonDiv } from "./styled";

const Button = ({ getQuote }) => {
  return (
    <ButtonDiv>
      <QuoteButton id="new-quote" onClick={getQuote}>
        Click a random quote
      </QuoteButton>
    </ButtonDiv>
  );
};
export default Button;
