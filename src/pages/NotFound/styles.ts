import styled from 'styled-components';

export const Container = styled.div`

`;

export const EmptyContent = styled.div`
    height: calc(100vh - 180px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EmptyDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;

    img{
        width: 200px;
    }

`;

export const TextPosition = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    text-align: center;
    overflow-y: scroll;

    /* Utilizando do webkit para personalizar o scroll */
    ::-webkit-scrollbar{
    width: 10px;
    }
    
    h3{
        color: #585858;
        font-weight: 100;
        font-size: 16px;
        margin-left: 30px;        
    } 
`;