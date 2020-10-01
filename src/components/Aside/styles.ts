import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.gray}; 
    border-right: 1px solid #c3c3c3;

`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h3{
        color: black;
        font-size: 12px;
        margin-top: 10px;
        margin-left: 10px;
    }
    /* align-items: center; */
`;

export const LogImg = styled.img`
    margin-top: 10px;
    width: 60px;
    height: 60px;
    display: flex;
`;

export const AsideContent = styled.div`
    margin-top: 50%;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AsideItemLink = styled.a`
    text-decoration: none;
    > h3 {
        
        font-weight: bold;
        font-size: px;
        color: ${props => props.theme.colors.secondary};

        /* Realizar a animação caso o cursor seja colocado em um dos itens da lista */
        cursor: pointer;
        transition: all .3s;

        &:hover{
            color: ${props => props.theme.colors.primary};
        }

    }
`;