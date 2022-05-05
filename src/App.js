import './App.css';
import { ProdutosEmPromocao } from './Produtos/ProdutosEmPromocao';
import Cabecalho from './EstruturaSite/Cabecalho/Cabecalho';
import Conteudo from './EstruturaSite/Conteudo/Conteudo';
import NavBar from './EstruturaSite/NavBar/NavBar';
import Rodape from './EstruturaSite/Rodape/Rodape';
import { GetPizza } from './Dados/info_pizza';

function App() {
  return (
    <>
      <Cabecalho titulo="Pizzaria" />
      <NavBar/>
      <ProdutosEmPromocao idcategoria="1"/>
      <GetPizza codigo={1}></GetPizza>
      <Conteudo/>

      <Rodape texto={"Copyright \u00A9 " +
        (new Date().getFullYear()) + " Minha Pizzaria"} />
    </>
    );
}

export default App;
