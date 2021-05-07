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
    max-width: 1200px;
  }

  @media(max-width: 800px) {
  :root {
    font-size: 45%;
  }
}
`;

export const colors = {
  gray: "#7a7a7a",
  white: '#FFFFFF',
  red: '#F8475F',
}


export default Global;