import styled from 'styled-components';

export const HeaderContainer = styled.div`
    

`;

export const Fields = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    #dataNascimento{
        width: 60%;
        background: none;
        color: ${props => props.theme.colors.primary};
        font-size: 16px;

    }


    #dataNascimentoLabel{
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        width: 60%;
        background: none;
        color: ${props => props.theme.colors.primary};
        font-size: 16px;

        &:focus-within{
            border-bottom: 3px solid ${props => props.theme.colors.primary};
            transition: all .3s;

            ::placeholder{
                color: transparent;
                transition: all .3s;
            }

        }
    }
`;

export const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    border-radius: 30px;
    width: 50%;
    height: 80%;
    background-color: white;
    border-bottom: 10px solid ${props => props.theme.colors.success};
    border-right: 10px solid ${props => props.theme.colors.success};    

    overflow-y: auto;

    /* Utilizando do webkit para personalizar o scroll */
    ::-webkit-scrollbar{
        width: 5px;
    }
    ::-webkit-scrollbar-thumb{
        /* background-color: ${props => props.theme.colors.primary}; */
        border-radius: 10px;
    }
`;

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input:not(#dataNascimento):not(#dataNascimentoLabel){
        display: flex;
        flex-direction: column;
        margin: 40px 0;
        width: 60%;
        border-bottom: 3px solid gray;
        background: none;
        color: ${props => props.theme.colors.primary};
        font-size: 16px;

        &:focus-within{
            border-bottom: 3px solid ${props => props.theme.colors.primary};
            transition: all .3s;

            ::placeholder{
                color: transparent;
                transition: all .3s;
            }

        }

    }

    select{
        width: 60%;
        font-size: 16px;
        color: black;
    }

    button{
        border-radius: 5px;
        margin-top: 80px;
        margin-bottom: 20px;
        width: 150px;
        height: 40px;
        background-color: white;
            color: #483afb;
            border: 1px solid #483afb;

        &:hover{
            transition: all .3s;
            font-weight: bold;
            background-color: #483afb;
            color: white;
        }

    }
`;

export const AComponent = styled.a`
    border-radius: 5px;
    text-decoration: none;
    margin-top: 80px;
    margin-bottom: 20px;
    width: 150px;
    height: 40px;
    background-color: white;
    color: #483afb;
    border: 1px solid #483afb;
    cursor: pointer;

    &:hover{
        transition: all .3s;
        background-color: #483afb;
        color: white;
    }

    h2{
        margin-top: 5px;
        text-align: center;
    }
`;