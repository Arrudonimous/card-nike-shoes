import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,800');

  body {
    background-color: #F1F1F1;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
