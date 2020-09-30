import React from 'react';

import logoImg from '../../assets/funcionario.svg';

import { Container, Header, LogImg, AsideContent, AsideItemLink } from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo Funcionário" />
            </Header>

            <AsideContent>
                <AsideItemLink href="/cadastrar">
                    <h3>Cadastrar</h3>
                </AsideItemLink>
            </AsideContent>

        </Container>
    );
}

export default Aside;