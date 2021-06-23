import { createGlobalStyle } from 'styled-components'

const  GlobalStyle = createGlobalStyle`
  :root{
    --very-dark-blue-black: #29292E;
    --desaturated-dark-blue: #605F98;
    --soft-violet: #835AFD;
    --grayish-blue: #A8A8B3;
    --light-grayish-blue: #EAF1FE;
    --very-light-gray: #E2E2E2;
    --very-light-gray-white: #F8F8F8;
    --white: #FFFFFF; 
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--light-grayish-blue);
    color: var(--very-dark-blue-black);
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  } 

  button {
    cursor: pointer;
  }
`

export default GlobalStyle;