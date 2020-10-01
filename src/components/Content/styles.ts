import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.colors.white};

    padding: 25px;

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
    border-top: 3px solid rgba(150, 150, 150, .4);
    border-right: 3px solid rgba(150, 150, 150, .4);
    border-left: 3px solid rgba(150, 150, 150, .4);
    border-bottom: 6px solid rgba(150, 150, 150, .4);

    
    border-right: 4px solid rgba(150, 150, 150, .4);
    border-bottom: 7px solid rgba(150, 150, 150, .4);
    -webkit-background-clip: padding-box; /* for Safari */
    background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
`;

