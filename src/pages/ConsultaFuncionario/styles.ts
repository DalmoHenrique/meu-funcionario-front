import styled from 'styled-components';

export const Container = styled.div`
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
     h1{
        font-size: 26px;
        font-weight: 500;
        color: ${props => props.theme.colors.secondary};
    } 
`;

export const Formulario = styled.div`
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
`;