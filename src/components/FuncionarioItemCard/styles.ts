import styled from 'styled-components';

export const Container = styled.li`

 
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    div:not(#nome){
        display: flex;
        background-color: gray;
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

    h3{
        color: white;
        text-decoration: none;
    } 

`;