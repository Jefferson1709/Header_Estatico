//importa o global style
import GlobalStyle from './styles/GlobalStyles';
//redirecionandor das paginas 
import { NavegacaoInicial } from './navigation';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavegacaoInicial />
    </>
  );
}

export default App;