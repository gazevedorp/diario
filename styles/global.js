import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: 400 16px Roboto, sans-serif;
    }
    .menu {
        height: 100vh;
        padding: 10px 0px 0px 0px;

        background-color: #ffffff;
    }
    .menu-item {
        padding: 24px 0px 10px 10px;
        font-size: 14px;

        color: #000000;
        background-color: #ffffff;
        border-bottom: 1px solid gray;
    }
    .menu-item:hover{
        padding: 20px 0px 20px 10px;
        background-color: #ffffff;
    }
`