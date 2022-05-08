import './App.css';
import Cabecalho from './EstruturaSite/Cabecalho/Cabecalho';
import Rodape from './EstruturaSite/Rodape/Rodape';
import Rotas from './Rotas';


function App() {
  return (
    <>
      <Cabecalho titulo="Pizzaria" />
      <Rotas/>
      <Rodape texto={"Copyright \u00A9 " +
        (new Date().getFullYear()) + " Minha Pizzaria"} />
    </>
    );
}

export default App;