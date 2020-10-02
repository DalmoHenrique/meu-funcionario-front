import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import FuncionarioList from './pages/FuncionarioList';

import CadastroFuncionario from './pages/CadastroFuncionario';
import ConsultaFuncionario from './pages/ConsultaFuncionario';

import NotFound from './pages/NotFound';

const Routes = () => {
    return (

        <BrowserRouter >
            {/* Criação das rotas para que faça a navegação entre as páginas. Note que todas as rotas estão acopladas dentro do Layout, para que seja possível 
                utilizar o useHistory do react-router-dom e usar seus recursos, como o método push usado em 'components/Aside' */}
            <Layout>
                <Switch>
                    {/* Dependendo de como for a URL, será redirecionado para as pages abaixo */}
                    <Route path="/" exact component={FuncionarioList} />
                    <Route path="/cadastrar" exact component={CadastroFuncionario} />
                    <Route path="/consultar/:id" exact component={ConsultaFuncionario} />
                    <Route path="*" exact component={NotFound} />
                </Switch>

            </Layout>
        </BrowserRouter>

    )
}

export default Routes;