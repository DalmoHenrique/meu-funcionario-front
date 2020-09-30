import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogImg = styled.img`
    margin-top: 10px;
    width: 40px;
    height: 40px;
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
        color: ${props => props.theme.colors.gray};

        /* Realizar a animação caso o cursor seja colocado em um dos itens da lista */
        cursor: pointer;
        transition: all .3s;

        &:hover{
            color: ${props => props.theme.colors.white};;
        }

    }
`;