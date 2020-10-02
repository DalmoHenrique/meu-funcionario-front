import React from 'react';

import { Container } from './styles';

import funcionarioListImg from '../../assets/funcionario-list.svg';

// Criando interface para tipar os dados que sairão na tela de listagem dos funcionários
interface IFuncionarioItemCard {
    nome: string;
    salario: string;
}

// Fazendo com que o React.FuncionalComponent seja do tipo IFuncionarioItemCard para que seja possível utilizar os mesmos no design do card
const FuncionarioItemCard: React.FC<IFuncionarioItemCard> = ({ nome, salario }) => {


    return (
        <Container>
            <div>
                <div id="nome">
                    <img src={funcionarioListImg} alt="funcionariolist" />
                    <h3>{nome}</h3>
                </div>
                <h3>{salario}</h3>
            </div>
        </Container>
    );
}

export default FuncionarioItemCard;