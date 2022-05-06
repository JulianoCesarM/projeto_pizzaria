import './App.css';
import Cabecalho from './EstruturaSite/Cabecalho/Cabecalho';
import Conteudo from './EstruturaSite/Conteudo/Conteudo';
import NavBar from './EstruturaSite/NavBar/NavBar';
import Rodape from './EstruturaSite/Rodape/Rodape';


function App() {
  return (
    <>
      <Cabecalho titulo="Pizzaria" />
      <NavBar/>
      
      
      <Conteudo/>

      <Rodape texto={"Copyright \u00A9 " +
        (new Date().getFullYear()) + " Minha Pizzaria"} />
    </>
    );
}

export default App;
