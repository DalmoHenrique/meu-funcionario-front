import React, { useState, useMemo, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { Container, HeaderContainer, Formulario, Fields, AComponent } from './styles';

import axios from 'axios';

interface IRouteConsultaParams {
    match: {
        params: {
            id: string;
        }
    }
}

interface IFuncionario {
    id: number;
    nome: string;
    endereco: string;
    dataNascimento: string;
    salario: number;
    genero: string;
}

const ConsultaFuncionario: React.FC<IRouteConsultaParams> = ({ match }) => {

    const { id } = match.params;
    const [funcionario, setFuncionario] = useState<IFuncionario>();


    // Neste useEffect será salvo o funcionário adquirido no JSON no seu próprio useState com nome de 'funcionario'
    useEffect(() => {
        let url = `http://localhost:5005/api/funcionario/consultar/${id}`;
        console.log(url);
        axios.get(url).then((r) => {
            setFuncionario(r.data);
            console.log(r.data);
        })

        // const { type } = match.params;
        // if (type === 'cadastrar') {
        //     console.log('oi');
        // } else if (type === undefined) {
        //     console.log('padrão');
        // }

    }, []);

    // Setando todos os useState para alterar os estados dos campos no formulário
    const [idFunc, setIdFunc] = useState('');
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [salario, setSalario] = useState('');
    const [genero, setGenero] = useState('');
    const [data, setData] = useState('');
    const history = useHistory();

    // Neste outro useEffect, precisaremos exibir o funcionário só quando ele for true (ou quando for diferente de undefined ou null), pois é necessário aguardar ele
    // ser renderizado. Desta forma só será executado as instruções depois que o funcionario for true
    useEffect(() => {
        if (funcionario) {
            setIdFunc(String(funcionario.id));
            setNome(funcionario.nome);
            setEndereco(funcionario.endereco);
            setSalario(String(funcionario.salario));
            // TODO ainda necessário setar corretamente o <select>
            setGenero(funcionario.genero);
            // console.log(String(funcionario.dataNascimento).substring(0, 10));
            setData(String(funcionario.dataNascimento).substring(0, 10));
        }
    }, [funcionario]);

    const realizarAlteracao = () => {

        {
            // Validação de todos os campos
            let url = `http://localhost:5005/api/funcionario/alterar/${id}`;
            console.log(url);
            axios.put(url, {
                id: Number(id),
                nome: nome,
                endereco: endereco,
                dataNascimento: data,
                salario: parseFloat(salario),
                genero: genero
            }).then(resp => {
                alert('Dados alterados com sucesso! :) ');
                const path = '/';
                // Fará com que volte para a tela inicial através deste useHistory do react-router-dom
                history.push(path);
            }, (error) => {
                alert('Falha na alteração. Tente novamente mais tarde');
            });
        }

    }

    const realizarExclusao = () => {

        {
            // Validação de todos os campos
            let url = `http://localhost:5005/api/funcionario/deletar/${id}`;
            console.log(url);
            axios.delete(url).then(resp => {
                alert('Cadastro excluído com sucesso! :) ');
                const path = '/';
                // Fará com que volte para a tela inicial através deste useHistory do react-router-dom
                history.push(path);
            }, (error) => {
                alert('Falha na exclusão. Tente novamente mais tarde');
            });
        }

    }


    return (
        <Container>
            <HeaderContainer>
                <h1>Consulta</h1>
            </HeaderContainer>
            <Formulario>
                <Fields>
                    <input type="text" value={nome} name="nome" onChange={e => setNome((e.target.value))} required />
                    <input type="text" value={endereco} onChange={e => setEndereco((e.target.value))} name="endereco" />
                    <input type="number" value={salario} onChange={e => setSalario((e.target.value))} min="0" step=".01" name="salario" />
                    <select value={genero} name="genero" onChange={e => setGenero((e.target.value))}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                    <input type="text" id="dataNascimentoLabel" name="dataNascimentoLabel" disabled={true} />
                    <input type="date" id="dataNascimento" value={data} onChange={e => setData((e.target.value))} name="dataNascimento" />
                </Fields>
                <AComponent onClick={realizarAlteracao}>
                    <h2>ALTERAR</h2>
                </AComponent>
                <AComponent onClick={realizarExclusao}>
                    <h2>EXCLUIR</h2>
                </AComponent>
            </Formulario>
        </Container>
    );
}

export default ConsultaFuncionario;