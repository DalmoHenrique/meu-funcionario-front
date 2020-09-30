// Arquivo para sobreescrever tipos de arquivos. Vai ter uma tipagem disponível para a aplicação inteira
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            white: string;
            black: string;
            gray: string;
            success: string;
            info: string;
            warning: string;
        }
    }
}