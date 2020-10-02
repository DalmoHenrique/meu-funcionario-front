import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { Container, HeaderContainer, Formulario, ButtonContainer } from './styles';

import { InputGroup, Input, Select, Button } from 'sancho';

import axios from 'axios';

import ButtonMU from '@material-ui/core/Button';
import DialogMU from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CadastroFuncionario: React.FC = () => {

    /**
     * Setando todos os useState para alterar os estados dos campos no formulário, sendo:
     * - Campos normais dos formulários para serem preenchidos
     * - 'alert' de erro caso o campo não seja preenchido, dando erro e pedindo para o usuário preencher aquele campo
     */
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
    const [openSucesso, setOpenSucesso] = useState(false);
    const [openFalha, setOpenFalha] = useState(false);
    const [openFalhaBanco, setOpenFalhaBanco] = useState(false);


    // Dialog de abertura caso o usuário não preencha todos os dados na tela
    const abrirDialogPreencherDados = () => {
        setOpenFalha(true);
    };

    // Dialog de abertura caso o usuário não preencha todos os dados na tela
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

    // Dialog de abertura caso o usuário cadastre com sucesso o funcionário
    const abrirDialogSucesso = () => {
        setOpenSucesso(true);
    };

    // Dialog de fechamento caso o usuário cadastre com sucesso o funcionário
    const fecharDialogSucesso = () => {
        setOpenSucesso(false);
        const path = '/';
        // Fará com que volte para a tela inicial através deste useHistory do react-router-dom
        history.push(path);
    };

    // Dialog de abertura caso não esteja sendo possível conectar com as requests da API
    const abrirDialogFalhaBanco = () => {
        setOpenFalhaBanco(true);
    };

    // Dialog de fechamento caso não esteja sendo possível conectar com as requests da API
    const fecharDialogFalhaBanco = () => {
        setOpenFalhaBanco(false);
    };

    /**
      *  Será executado esse useEffect assim que for carregado a tela. Carregará a Data Atual, desta forma no campo de Data não permitirá que seja informado
      *  uma data futura (pois o campo é para informar a data de nascimento)
      */
    useEffect(() => {
        let newDate = new Date()
        let date = newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
        let month = newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        setDataAtual(`${year}${'-'}${month < 10 ? `0${month}` : `${month}`}${'-'}${date}`);
    }, []);

    /**
     * Função que será executada apenas quando o usuário clicar em 'Salvar Cadastro'. Será executado a requisição POST e salvar todos os campos do
     * formulário
     */
    const realizarCadastro = () => {
        {
            /**
             * Validação de todos os campos. Caso retorne com sucesso, disparar Dialog de sucesso, senão dialog de preencher dados. Se não for possível
             * conectar em nenhum deles, cai para algum problema na request/banco 
             */
            if (nome !== '' && endereco !== '' && salario !== '' && data !== '') {
                axios.post('http://localhost:5005/api/funcionario/cadastrar/sucesso', {
                    nome: nome,
                    endereco: endereco,
                    dataNascimento: data,
                    salario: parseFloat(salario),
                    genero: genero
                }).then(resp => {
                    abrirDialogSucesso();
                }, (error) => {
                    abrirDialogFalhaBanco();
                });
            } else {
                abrirDialogPreencherDados();
            }

        }

    }

    // Renderização de todo formulário abaixo no return
    return (
        <Container>
            <HeaderContainer>
                <h1>Dados de Cadastro</h1>
            </HeaderContainer>

            <Formulario>
                {/* Inputs do formulário */}
                <InputGroup error={nomeError} label="Nome">
                    <Input value={nome} maxLength={70} onChange={e => setNome((e.target.value))} placeholder="Carlos Eduardo de Almeida" />
                </InputGroup>
                <InputGroup error={enderecoError} label="Endereço">
                    <Input value={endereco} maxLength={70} onChange={e => setEndereco((e.target.value))} placeholder="Rua Emílio Santana das Cruzes, 421" />
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
                {/* Botão para salvar cadastro */}
                <ButtonContainer>
                    <Button onClick={realizarCadastro} intent="success">Salvar Cadastro</Button>
                </ButtonContainer>

                {/* Dialog para caso der o cadastro com sucesso */}
                <DialogMU
                    open={openSucesso}
                    onClose={fecharDialogSucesso}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Sucesso!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Cadastro realizado com sucesso
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <ButtonMU onClick={fecharDialogSucesso} color="primary" autoFocus>
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
                        {"Não foi possível realizar o cadastro"}
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

export default CadastroFuncionario;