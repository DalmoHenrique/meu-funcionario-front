import React from 'react';

import logoImg from '../../assets/funcionario.svg';

import { useHistory } from 'react-router-dom';

import { Container, Header, LogImg, AsideContent, AsideItemLink, Signature, AsideHeader, MenuOption } from './styles';

import { MenuList, MenuItem, IconUser } from 'sancho';

const Aside: React.FC = () => {

    const history = useHistory();
    const paginaInicial = () => {
        const path = '/';
        history.push(path);
    };

    return (
        <Container>
            <AsideContent>
                <AsideHeader>
                    <Header>
                        <LogImg onClick={paginaInicial} src={logoImg} alt="Logo Funcionário" />
                        <h3>RCKYD</h3>
                    </Header>
                    <MenuOption>
                        <AsideItemLink href="/cadastrar">
                            <MenuList>
                                <MenuItem contentBefore={<IconUser />}>
                                    Cadastrar
                                </MenuItem>
                            </MenuList>
                        </AsideItemLink>
                    </MenuOption>
                </AsideHeader>

                <Signature>
                    <h6>Developed by: Dalmo Oliveira</h6>
                </Signature>


            </AsideContent >
        </Container >
    );
}

export default Aside;