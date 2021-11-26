import { createGlobalStyle } from 'styled-components';
//Estilo base
export default createGlobalStyle`
 
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    html , body, #root {
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        height: 100%;
        background: var(--gray);
    }

    *, button, input {
        border: 0;
        background: none;
    }

    a, u {
        text-decoration: none;
    }

    :root {
        --white: #FFFFFF;
        --black: #191414;
        --gray: #f5f5f5;
        --primary: #000;
        --secondary: #15181C;
        --search: #202327;
        --white-two: #D9D9D9;
        --gray-two: #7A7A7A;
        --outline: #2F3336;
        --retweet: #00C06B;
        --like: #E8265E;
        --twitter: #33A1F2;
        --twitter-dark-hover: #011017;
        --twitter-light-hover: #2C8ED6;
        --primario: #54C5D0;
        --segundario: #811FEE;

        --linearGradientColor: linear-gradient(to right, #811FEE , #54C5D0);
    }
    
`;