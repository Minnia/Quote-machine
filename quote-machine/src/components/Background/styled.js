import styled from "styled-components";

export const Background = styled.div`
  font-family: sans-serif;
  background: linear-gradient(-45deg, #ee7752, #e73c65, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  width: 100%;
  height: 100%;
  position: absolute;
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

  #text {
    font-family: "Cinzel", serif;
  }
  #author {
    font-family: "Cinzel", serif;
  }
`;
