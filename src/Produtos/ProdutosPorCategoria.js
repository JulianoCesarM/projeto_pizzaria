import { getProdutoCategoria } from '../Dados/info_pizza';
import Produto from './Produto';
import './Produto.css'

function ProdutosPorCategoria(prop){
    let produtos = getProdutoCategoria(prop.categoria);
    return(
        <div className="conteudo-pag">
            
            <h1 id="titulo-body">{"Cardápio de Pizza "+prop.categoria}</h1>
            {produtos.map((produto)=>
                    <Produto item={produto} />
            )}

        </div>
    );
}
export default ProdutosPorCategoria;