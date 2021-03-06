import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  color: #113c2b;
}`;
