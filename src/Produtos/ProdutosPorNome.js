import { getProdutoNome } from "../Dados/info_pizza";
import Produto from "./Produto";

function ProdutosPorNome(prop){
    let produtos = getProdutoNome(prop.nome);
    return(
        <div className="conteudo-pag">
            <h1 id="titulo-body">{"Pizza de "+prop.nome}</h1>
            {produtos.map((produto)=>
                <Produto item={produto} />
            )}

        </div>
    );
}

export default ProdutosPorNome;