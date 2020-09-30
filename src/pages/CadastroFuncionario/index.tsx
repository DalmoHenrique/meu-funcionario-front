import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { Container, HeaderContainer, Formulario, Fields, AComponent } from './styles';

import axios from 'axios';

const CadastroFuncionario: React.FC = () => {

    // Setando todos os useState para alterar os estados dos campos no formulário
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [salario, setSalario] = useState('');
    const [genero, setGenero] = useState('');
    const [data, setData] = useState('');
    const history = useHistory();

    const realizarCadastro = () => {

        {
            // Validação de todos os campos

            axios.post('http://localhost:5005/api/funcionario/cadastrar/sucesso', {
                nome: nome,
                endereco: endereco,
                dataNascimento: data,
                salario: parseFloat(salario),
                genero: genero
            }).then(resp => {
                alert('Dados salvos com sucesso! :) ');
                const path = '/';
                // Fará com que volte para a tela inicial através deste useHistory do react-router-dom
                history.push(path);
            }, (error) => {
                alert('Falha no cadastro. Tente novamente mais tarde');
            });
        }

    }

    return (
        <Container>
            <HeaderContainer>
                <h1>Cadastro</h1>
            </HeaderContainer>
            <Formulario>
                <Fields>
                    <input type="text" placeholder="Seu nome" value={nome} name="nome" onChange={e => setNome((e.target.value))} required />
                    <input type="text" placeholder="Seu endereço (Ex: Rua João, 19)" value={endereco} onChange={e => setEndereco((e.target.value))} name="endereco" />
                    <input type="number" placeholder="Salário (Ex: 1000.00)" value={salario} onChange={e => setSalario((e.target.value))} min="0" step=".01" name="salario" />
                    <select name="genero" onChange={e => setGenero((e.target.value))}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                    <input type="text" id="dataNascimentoLabel" placeholder="Data de Nascimento" name="dataNascimentoLabel" disabled={true} />
                    <input type="date" id="dataNascimento" value={data} onChange={e => setData((e.target.value))} name="dataNascimento" />
                </Fields>
                <AComponent onClick={realizarCadastro}>
                    <h2>SALVAR</h2>
                </AComponent>
            </Formulario>
        </Container>
    );
}

export default CadastroFuncionario;