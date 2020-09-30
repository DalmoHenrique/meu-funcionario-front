import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import EstiloDefault from './styles/themes/estiloDefault'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={EstiloDefault}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;