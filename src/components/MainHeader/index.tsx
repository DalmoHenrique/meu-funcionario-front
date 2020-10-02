import React, { useMemo } from 'react';

import emojis from '../../utils/emojis';

import TitleHeader from '../TitleHeader';

import { Container, Profile, Welcome, Description } from './styles';

const MainHeader: React.FC = () => {

    // Realizar a geração randômica dos emojis e disponibilizar na tela inicial através do useMemo para guardar o valor do índice
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    return (
        <Container>
            <TitleHeader />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <Description>Bem vindo ao sistema RCKYD!</Description>
            </Profile>

        </Container>
    );
}

export default MainHeader;