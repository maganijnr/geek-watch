import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
  }

  .owl-body{
    height: 200px;
  }
`