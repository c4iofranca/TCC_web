import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
    }

    body {
        background-attachment: fixed;
        background-color: #011018;
        font-family: Open-Sans, Arial, Helvetica, sans-serif, sans-serif;
        height: 100vh;
        color: white;
        text-align: center;
        
    }    
`;

export default GlobalStyle;
