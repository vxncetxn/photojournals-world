import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=optional");
    @import url("https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700&display=optional");

    :root {
        --font-primary: Lato;
        --font-secondary: Oswald;

        --color-white: #fcfcfc;
        --color-gray: #cccccc;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        vertical-align: top;
    }

    html {
        font-size: 62.5%;
    }

    body {
        position: relative;
        background-color: #e2f1f1;
        // border: 1px solid red;
        overflow: hidden;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;

export default Defaults;
