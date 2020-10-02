import React from 'react';

import { Container, EmptyContent, EmptyDescription, TextPosition } from './styles';

import NotFoundImg from '../../assets/404.svg';

const NotFound: React.FC = () => {

    // Caso não encontre a URL informada (alguma digitação errada, por exemplo) será retornado um layout de página não encontrada
    return (
        <Container>
            {
                <EmptyContent>
                    <EmptyDescription>
                        <TextPosition>
                            <img src={NotFoundImg} />
                            <h3>Página não encontrada</h3>
                        </TextPosition>
                    </EmptyDescription>
                </EmptyContent>
            }
        </Container>
    );
}

export default NotFound;