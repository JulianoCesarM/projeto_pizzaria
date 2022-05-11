import { getProdutoNome } from "../Dados/info_pizza";


function ProdutosPorNome(prop){
    let produtos = getProdutoNome(prop.nome)
    return(
        <div className="conteudo-pag">
            
            <h1 id="titulo-body">{"Cardápio de Pizza "+prop.categoria}</h1>
            {produtos.map((produto)=>
                    <Produto item={produto} />
            )}

        </div>
    );
}

export default ProdutosPorNome;