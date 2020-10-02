import React from 'react';

import { Grid } from './styles';

import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'

const Layout: React.FC = ({ children }) => {
    return (
        // Posicionamento de cada component no grid, MainHeader, Aside e Content
        <Grid>
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content>
        </Grid>
    );
}

export default Layout;