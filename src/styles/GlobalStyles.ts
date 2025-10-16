import { createGlobalStyle } from "styled-components";
import { normalize } from "./normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}

:root {
    --custom-gray: #f3f3f5;
    --custom-grayBorder: #0000001a;
}

html{
  box-sizing: border-box;
}

*,
*::after,
*::before{
  box-sizing: inherit ;
}

a{
  color: inherit;
  text-decoration: none;
}

img{
  max-width: 100%;
}

body{
    margin: 0;
    padding: 0;
  min-width: 320px;
  font-family: 'Inter', sans-serif;
  color: #000;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6,
  p,
  ul, ol {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

input,
textarea,
select {
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  font: inherit;
  color: inherit;
}

.container{
  max-width: 1432px;
  margin: 0 auto;
  width: 100%;
  padding: 0;
}
`;
