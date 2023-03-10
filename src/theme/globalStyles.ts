import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
    }

    body {
        background-attachment: fixed;
        background: linear-gradient(177.9deg, rgb(58, 62, 88) 3.6%, rgb(119, 127, 148) 105.8%);
        font-family: Open-Sans, Arial, Helvetica, sans-serif, sans-serif;
        height: 100vh;
        color: white;
        text-align: center;
        font-weight: bold;
    }    
`;

export default GlobalStyle;
