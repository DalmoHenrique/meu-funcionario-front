import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    h3{
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 10px;
        color: ${props => props.theme.colors.white};
        text-decoration: none;
    } 

    img {
        height: 30px;
        width: 30px;
    }

    #nome{
        display: flex;
    }

    div:not(#nome){
        display: flex;
        background-color: ${props => props.theme.colors.info};
        width: 99%;
        padding: 12px 10px;
        border-radius: 5px;
        justify-content: space-between;
        cursor: pointer;
        transition: all .3s;
        &:hover{
            opacity: .7;
            transform: translateX(4px);
        } 
    }
`;