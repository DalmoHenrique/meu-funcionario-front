import React, { useEffect, useState } from 'react';

import { Container, Content, LinkItem, EmptyContent, EmptyDescription, TextPosition } from './styles';

import FuncionarioItemCard from '../../components/FuncionarioItemCard';

import axios from 'axios';

const FuncionarioList: React.FC = () => {

    const [funcionarioList, setFuncionarioList] = useState<any[]>([]);

    /**
     * Através desse useEffect será carregado os dados do funcionário assim que a tela for carregada. Nesse caso
     * será trazido a listagem de todos os funcionários e guardado numa state de funcionarioList. Para obter os dados através da requisição
     * foi utilizado o axios (que é um cliente HTTP, sendo uma biblioteca API para realizar as requisições. No caso abaixo com o get)
     */
    useEffect(() => {
        let url = 'http://localhost:5005/api/funcionario';
        axios.get(url).then((r) => {
            setFuncionarioList(r.data);
            console.log(r.data);
        })

    }, []);

    /**
     * Caso a lista venha vazia, será renderizado na tela um layout informando para realizar o primeiro cadastro no sistema. Caso já tenha algum cadastro,
     * será renderizado na tela a listagem dos funcionários com base no layout dos cartões criados no FuncionarioItemCard
     */
    if (funcionarioList.length > 0) {
        console.log(`Tamanho funcionário: ${funcionarioList.length} agora populado`);
        return (

            // Função sort() para ordenar em ordem alfabética a listagem dos funcionários na tela
            <Container>
                {
                    funcionarioList
                        .sort((a, b) => a.nome.localeCompare(b.nome))
                        .map(item => {
                            return (
                                <LinkItem key={item.id} href={`/consultar/${item.id}`}>
                                    <Content>
                                        <FuncionarioItemCard
                                            nome={item.nome}
                                            salario={`R$ ${String(item.salario).replace(".", ",")}`}
                                        />
                                    </Content>
                                </LinkItem>

                            )
                        })
                }
            </Container>
        );
    } else {
        console.log(`Tamanho funcionário: ${funcionarioList.length} mas executando msm assim`);
        return (
            <Container>
                {
                    <EmptyContent>
                        <EmptyDescription>
                            <TextPosition>
                                <h3>Você não tem nenhum funcionário cadastrado. Clique no menu ao lado em <strong>Cadastrar</strong> para adicionar um novo funcionário</h3>
                            </TextPosition>
                        </EmptyDescription>
                    </EmptyContent>
                }
            </Container>
        );
    }
}

export default FuncionarioList;