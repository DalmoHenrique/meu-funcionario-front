import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import EstiloDefault from './styles/themes/estiloDefault'

const App: React.FC = () => {
  return (
    // Definição do tema do site, dentro os estilos globais que serão aplicados para toda a página e as rotas que farão a navegação entre as páginas
    <ThemeProvider theme={EstiloDefault}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;