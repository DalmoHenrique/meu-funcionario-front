import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
     h1{
        font-size: 26px;
        font-weight: 500;
        color: ${props => props.theme.colors.secondary};
    } 
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
`;

export const Fields = styled.div`
    /* margin-top: 30px;
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
    } */
`;

export const Formulario = styled.div`

`;

export const Container = styled.div`
    /* height: 100%;
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

    } */
`;

export const AComponent = styled.a`
    /* border-radius: 5px;
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
    } */
`;