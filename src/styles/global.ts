import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/githubB.svg';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
}

body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top
}

body, input, button {
    font: 16px roboto;
}

#root {
    max-width: 700px;
    margin: 0 auto;
    padding: 40px 20px;
}

cursor: pointer;

`;
