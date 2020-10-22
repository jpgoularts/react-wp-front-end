import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif !important;
    }

    body {
        background: #FFF;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;

        @media (min-width: 576px) {
            max-width: 540px;
        }

        @media (min-width: 768px) {
            max-width: 720px;
        }

        @media (min-width: 992px) {
            max-width: 960px;
        }

        @media (min-width: 1200px) {
            max-width: 1140px;
        }

    }
`;
