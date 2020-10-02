import React from 'react';

import { Container, BackgroundList } from './styles';

const Content: React.FC = ({ children }) => {
    return (
        // Exibir todas as childrens de Content, sendo a listagem dos funcionários
        <Container>
            <BackgroundList>
                {children}
            </BackgroundList>
        </Container>
    );
}

export default Content;