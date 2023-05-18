import { createGlobalStyle } from "styled-components";

// 전역 style
const GlobalStyle = createGlobalStyle`
    * {
        margin:0;padding:0;border:0;
    }
    body{
        position: relative;
        width: 100%;
        margin: 0;

        font-family: 'Nunito', 'Segoe UI', Tahoma, Verdana, sans-serif;
        background: #f7f7f7;
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
`;

export default GlobalStyle;