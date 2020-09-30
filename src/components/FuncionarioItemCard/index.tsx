import React from 'react';

import { Container } from './styles';

interface IFuncionarioItemCard {
    nome: string;
    salario: string;
}

const FuncionarioItemCard: React.FC<IFuncionarioItemCard> = ({ nome, salario }) => {


    return (
        <Container color="#FFF">
            <div>
                <div id="nome">
                    <h3>{nome}</h3>
                </div>
                <h3>{salario}</h3>
            </div>
        </Container>
    );
}

export default FuncionarioItemCard;