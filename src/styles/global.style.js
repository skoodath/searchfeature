import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  list-style-type: none;
  box-sizing: border-box;
}
  body{
    font-family: verdana, sans-serif;
  }
`;

export default GlobalStyle;
