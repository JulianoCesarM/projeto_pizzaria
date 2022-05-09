import { getProdutoCategoria } from '../Dados/info_pizza';
import { useParams } from "react-router-dom";
import Produto from './Produto';
import './Produto.css'

function ProdutosPorCategoria(prop){
    let params = useParams();
    let produtos = getProdutoCategoria(+params.categoria);
    return(
        <div className="conteudo-pag">
            
            <h1>{"Cardápio de Pizza "+prop.categoria}</h1>
            {produtos.map((produto)=>
                    <Produto item={produto} />
            )}

        </div>
    );
}
export default ProdutosPorCategoria;