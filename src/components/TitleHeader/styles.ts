import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: ${props => props.theme.colors.info};

    h1{
        letter-spacing: 2px;
    }
`;