import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import FuncionarioList from './pages/FuncionarioList';

import CadastroFuncionario from './pages/CadastroFuncionario';
import ConsultaFuncionario from './pages/ConsultaFuncionario';

const Routes = () => {
    return (

        <BrowserRouter >
            {/* Criação das rotas para que faça a navegação entre as páginas */}
            <Layout>
                <Switch>
                    <Route path="/" exact component={FuncionarioList} />
                    <Route path="/cadastrar" exact component={CadastroFuncionario} />
                    <Route path="/consultar/:id" exact component={ConsultaFuncionario} />
                </Switch>

            </Layout>
        </BrowserRouter>

    )
}

export default Routes;