import { createGlobalStyle } from 'styled-components';
// Estilização padrão do site que serão os estilos globais
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    button{
        cursor: pointer;
    }

`;