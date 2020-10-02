import styled from 'styled-components';

import backgroundImage from '../../assets/background-image.jpg';

/**
     * Layout
     * MH = Main Header
     * AS = Aside
     * CT = Content
*/

export const Grid = styled.div`

    background-image: url('${backgroundImage}');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    display: grid;
    /* Primeira coluna com um tamanho de 250px e irá auto preencher com o resto */
    grid-template-columns: 250px auto;
    /* Primeira linha com um tamanho de 70px e irá auto preencher com o resto */
    grid-template-rows: 70px auto;

    /* Onde cada componente irá se encaixar, sendo o Aside no lado esquerdo, o MainHeader no canto superior e o Content o resto
    do espaço que ocupar */
    grid-template-areas:
    'AS MH'
    'AS CT';

    /* Preencher toda a área da viewport height */
    height: 100vh;
    

`;