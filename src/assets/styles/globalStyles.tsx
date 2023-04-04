import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* background-color: black; */
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        height: 100vh;
        width: 100%;
    }

`;

export default GlobalStyle;