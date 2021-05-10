import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

  * {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 65%;
  }

  html, body, #root{
   height: 100vh;
  }

  .container {
    width: 100vw;
    max-width: 1248px;
  }

  @media(max-width: 800px) {
  :root {
    font-size: 45%;
  }
}
`;

export const colors = {
  gray: "#7a7a7a",
  hoverGray: "#E6E8EA",
  lightGray: "#BDBDBD",
  mediumGray: "#C0C0C0",
  newsGray: "#F2F2F2",
  darkGray: "#585858",
  errorGray: "#333333",
  white: '#FFFFFF',
  red: '#F8475F',
  errorRed: "#D7182A",
  black: "#000000",
}


export default Global;