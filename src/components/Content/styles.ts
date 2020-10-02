import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    
    color: ${props => props.theme.colors.white};
    border-left: 1px solid #c3c3c3;
    padding: 25px;
    box-shadow: inset 0 0 1px gray;

    /* Irá descontar o valor que tem do Content pelo valor do header do MainHeader. Para que caiba corretamente no grid */
    height: calc(100vh - 70px);
    /* Caso o tamanho da lista ultrapasse o tamanho da tela (der um overflow), criar um scroll personalizado */
    overflow-y: scroll;

    /* Utilizando do webkit para personalizar o scroll */
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.primary};
        border-radius: 10px;
    }

`;

export const BackgroundList = styled.div`
    background-color: #f6f6f6;
    padding: 20px;
    border-radius: 2px;
    min-height: 98%;
    box-shadow:  0 0 1em gray;
    -webkit-background-clip: padding-box; /* for Safari */
    background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
`;

