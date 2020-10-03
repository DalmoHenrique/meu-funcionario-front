import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    background-color: ${props => props.theme.colors.gray}; 
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;

    border-bottom: 1px solid #c3c3c3;
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3`
    color: ${props => props.theme.colors.info};
`;

export const Description = styled.span`
    color: ${props => props.theme.colors.info};
`;