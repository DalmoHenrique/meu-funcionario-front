import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};

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