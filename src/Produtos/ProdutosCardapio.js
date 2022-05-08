import { getAllProdutos } from '../Dados/info_pizza';
import Produto from './Produto';

function ProdutosCardapio(){
    let produtos = getAllProdutos()
    return(
        <>
            <div className="conteudo-pag">
                <h1>Cardápio</h1>
                {produtos.map((produto)=>
                    <Produto item={produto} />
                )}
            </div>
        </>
    );

}
export default ProdutosCardapio;