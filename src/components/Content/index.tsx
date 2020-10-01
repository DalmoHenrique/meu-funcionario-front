import React from 'react';

import { Container, BackgroundList } from './styles';

const Content: React.FC = ({ children }) => {


    return (
        <Container>
            <BackgroundList>
            {children}
            </BackgroundList>
        </Container>
    );
}

export default Content;