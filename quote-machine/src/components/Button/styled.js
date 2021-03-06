import styled from "styled-components";

export const QuoteButton = styled.button`
  background-color: transparent;
  outline: none;
  border: 1px solid black;
  height: 50px;
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  :hover {
    border-radius: 15px 50px 30px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8%;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
