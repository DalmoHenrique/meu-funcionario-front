import React, { useEffect, useState, useMemo } from 'react';

import { Container, Content, LinkItem } from './styles';

import FuncionarioItemCard from '../../components/FuncionarioItemCard';

import axios from 'axios';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

const FuncionarioList: React.FC<IRouteParams> = ({ match }) => {


    // useMemo(() => {
    //     return type === 'cadastrar' ? console.log(type) : '';
    // }, [type]);

    const [funcionarioList, setFuncionarioList] = useState<any[]>([]);

    useEffect(() => {
        let url = 'http://localhost:5005/api/funcionario';
        axios.get(url).then((r) => {
            setFuncionarioList(r.data);
            console.log(r.data);
        })

        // const { type } = match.params;
        // if (type === 'cadastrar') {
        //     console.log('oi');
        // } else if (type === undefined) {
        //     console.log('padrão');
        // }

    }, []);


    return (
        <Container>
            {funcionarioList.map(item => {
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
            })}
        </Container>
    );
}

export default FuncionarioList;