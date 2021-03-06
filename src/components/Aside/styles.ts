import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.gray}; 

    .MenuList{
        margin-left: 40px;
    }
`;

export const AsideContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-between;
`;

export const AsideHeader = styled.div`
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    h3{
        color: ${props => props.theme.colors.info};
        font-size: 12px;
        margin-top: 10px;
        margin-left: 10px;
    }
`;

export const LogImg = styled.img`
    width: 60px;
    height: 60px;
    display: flex;
    padding-top: 5px;
    cursor: pointer;
`;

export const MenuOption = styled.div`
    display: flex;
    width: 250px;
    height: 50px;
    transition: all .3s;
    &:hover{
        background-color: #f1f3f5;
    }
`;

export const AsideItemLink = styled.a`
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    text-decoration: none;
    width: 100%;
    > h3 {
        font-weight: bold;
        color: ${props => props.theme.colors.info};
    }
    transition: all .3s;
    &:hover{
        background-color: #f1f3f5;
    }    
`;

export const Signature = styled.div`
    margin-bottom: 20px;
    h6{
        color: ${props => props.theme.colors.info};
    }
`;