import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
    }

    body {
        background-attachment: fixed;
        background-color: #141B2D;
        font-family: Open-Sans, Arial, Helvetica, sans-serif, sans-serif;
        height: 100vh;
        color: white;
        text-align: center;
        
    }    

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: #81858D;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #009EE0;
    }
`;

export default GlobalStyle;
