import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { Container, HeaderContainer, Formulario, Fields, AComponent, ButtonContainer } from './styles';

import { InputGroup, Input, Select, Button, Dialog, Text, useToast, useTheme } from 'sancho';

import axios from 'axios';

import ButtonMU from '@material-ui/core/Button';
import DialogMU from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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

    /**
     * Setando todos os useState para alterar os estados dos campos no formulário, sendo:
     * - Campos normais dos formulários para serem preenchidos
     * - 'alert' de erro caso o campo não seja preenchido, dando erro e pedindo para o usuário preencher aquele campo
     */
    const [idFunc, setIdFunc] = useState('');
    const [nome, setNome] = useState('');
    const [nomeError, setNomeError] = useState('');
    const [endereco, setEndereco] = useState('');
    const [enderecoError, setEnderecoError] = useState('');
    const [salario, setSalario] = useState('');
    const [salarioError, setSalarioError] = useState('');
    const [genero, setGenero] = useState('Masculino');
    const [data, setData] = useState('');
    const [dataAtual, setDataAtual] = useState('');
    const [dataError, setDataError] = useState('');
    const history = useHistory();
    const [openSucessoAlteracao, setOpenSucessoAlteracao] = useState(false);
    const [openSucessoExclusao, setOpenSucessoExclusao] = useState(false);
    const [openAlertDialogExclusao, setOpenAlertDialogExclusao] = useState(false);
    const [openFalha, setOpenFalha] = useState(false);
    const [openFalhaBanco, setOpenFalhaBanco] = useState(false);

    const { id } = match.params;
    const [funcionario, setFuncionario] = useState<IFuncionario>();

    const abrirDialogPreencherDados = () => {
        setOpenFalha(true);
    };

    const fecharDialogPreencherDados = () => {
        setOpenFalha(false);
        setNomeError('');
        setEnderecoError('');
        setSalarioError('');
        setDataError('');
        if (nome === '') {
            setNomeError("Este campo é obrigatório");
        }
        if (endereco === '') {
            setEnderecoError("Este campo é obrigatório");
        }
        if (salario === '') {
            setSalarioError("Este campo é obrigatório");
        }
        if (data === '') {
            setDataError("Este campo é obrigatório");
        }
    };
    const abrirDialogSucessoAlteracao = () => {
        setOpenSucessoAlteracao(true);
    };

    const fecharDialogSucessoAlteracao = () => {
        setOpenSucessoAlteracao(false);
        const path = '/';
        // Fará com que volte para a tela inicial através deste useHistory do react-router-dom
        history.push(path);
    };

    const abrirAlertDialogExclusao = () => {
        setOpenAlertDialogExclusao(true);
    };

    const fecharSucessoExclusao = () => {
        setOpenSucessoExclusao(false);
        const path = '/';
        // Fará com que volte para a tela inicial através deste useHistory do react-router-dom
        console.log(history);
        history.push(path);
    };

    const fecharDialogSucessoExclusao = () => {

        {
            let url = `http://localhost:5005/api/funcionario/deletar/${id}`;
            axios.delete(url).then(resp => {
                setOpenAlertDialogExclusao(false);
                setOpenSucessoExclusao(true);
            }, (error) => {
                abrirDialogFalhaBanco();
            });

        }

    };

    const fecharDialogCanceladoExclusao = () => {
        setOpenAlertDialogExclusao(false);
    };

    const abrirDialogFalhaBanco = () => {
        setOpenFalhaBanco(true);
    };

    const fecharDialogFalhaBanco = () => {
        setOpenFalhaBanco(false);
    };

    // Neste useEffect será salvo o funcionário adquirido no JSON no seu próprio useState com nome de 'funcionario'
    useEffect(() => {
        let url = `http://localhost:5005/api/funcionario/consultar/${id}`;
        console.log(url);
        axios.get(url).then((r) => {
            setFuncionario(r.data);
            console.log(r.data);
        })

        let newDate = new Date()
        let date = newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
        let month = newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        setDataAtual(`${year}${'-'}${month < 10 ? `0${month}` : `${month}`}${'-'}${date}`);

    }, []);

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
            let url = `http://localhost:5005/api/funcionario/alterar/${id}`;
            // Validação de todos os campos
            if (nome !== '' && endereco !== '' && salario !== '' && data !== '') {
                axios.put(url, {
                    id: Number(id),
                    nome: nome,
                    endereco: endereco,
                    dataNascimento: data,
                    salario: parseFloat(salario),
                    genero: genero
                }).then(resp => {
                    abrirDialogSucessoAlteracao();
                }, (error) => {
                    abrirDialogFalhaBanco();
                });
            } else {
                abrirDialogPreencherDados();
            }

        }

    }

    const realizarExclusao = () => {
        abrirAlertDialogExclusao();
    }

    return (
        <Container>
            <HeaderContainer>
                <h1>Dados da Consulta</h1>
            </HeaderContainer>

            <Formulario>

                {/* Inputs do formulário */}
                <InputGroup error={nomeError} label="Nome">
                    <Input value={nome} onChange={e => setNome((e.target.value))} placeholder="Carlos Eduardo de Almeida" />
                </InputGroup>
                <InputGroup error={enderecoError} label="Endereço">
                    <Input value={endereco} onChange={e => setEndereco((e.target.value))} placeholder="Rua Emílio Santana das Cruzes, 421" />
                </InputGroup>
                <InputGroup error={salarioError} label="Salário">
                    <Input value={salario} onChange={e => setSalario((e.target.value))} type="number" min="0" step=".01" placeholder="1523,48" />
                </InputGroup>
                <InputGroup label="Gênero">
                    <Select value={genero} onChange={e => setGenero((e.target.value))}>
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </Select>
                </InputGroup>
                <InputGroup error={dataError} label="Data de Nascimento">
                    <Input type="date" max={dataAtual} value={data} onChange={e => setData((e.target.value))} />
                </InputGroup>

                <ButtonContainer>
                    <Button onClick={realizarAlteracao} intent="primary">Alterar Cadastro</Button>
                    <Button onClick={realizarExclusao} intent="danger">Excluir Cadastro</Button>
                </ButtonContainer>


                {/* Dialog para caso der o submit com sucesso */}
                <DialogMU
                    open={openSucessoAlteracao}
                    onClose={fecharDialogSucessoAlteracao}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Sucesso!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Alteração realizada com sucesso
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <ButtonMU onClick={fecharDialogSucessoAlteracao} color="primary" autoFocus>
                            OK
                        </ButtonMU>
                    </DialogActions>
                </DialogMU>

                {/* Dialog para caso o formulário não esteja preenchido por completo */}
                <DialogMU
                    open={openFalha}
                    onClose={fecharDialogPreencherDados}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Não foi possível realizar a alteração"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Formulário inconsistente. Por favor preencha todos os campos
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <ButtonMU onClick={fecharDialogPreencherDados} color="primary" autoFocus>
                            OK
                        </ButtonMU>
                    </DialogActions>
                </DialogMU>

                {/* Dialog para questionar se realmente deseja excluir o funcionário */}
                <DialogMU
                    open={openAlertDialogExclusao}
                    onClose={fecharDialogCanceladoExclusao}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Aviso:"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Você realmente deseja excluir este funcionário?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <ButtonMU onClick={fecharDialogSucessoExclusao} color="primary" autoFocus>
                            Sim
                        </ButtonMU>
                        <ButtonMU onClick={fecharDialogCanceladoExclusao} color="primary" autoFocus>
                            Não
                        </ButtonMU>
                    </DialogActions>
                </DialogMU>

                {/* Dialog para caso der a exclusão com sucesso */}
                <DialogMU
                    open={openSucessoExclusao}
                    onClose={fecharSucessoExclusao}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Sucesso!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Exclusão realizada com sucesso
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <ButtonMU onClick={fecharSucessoExclusao} color="primary" autoFocus>
                            OK
                        </ButtonMU>
                    </DialogActions>
                </DialogMU>


                {/* Dialog para caso a API não esteja conectando para realizar as requisições */}
                <DialogMU
                    open={openFalhaBanco}
                    onClose={fecharDialogFalhaBanco}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Não foi possível realizar o cadastro"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Não foi possível conectar ao banco de dados. Entre em contato com o Suporte
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <ButtonMU onClick={fecharDialogFalhaBanco} color="primary" autoFocus>
                            OK
                        </ButtonMU>
                    </DialogActions>
                </DialogMU>


            </Formulario>
        </Container>
    );
}

export default ConsultaFuncionario;