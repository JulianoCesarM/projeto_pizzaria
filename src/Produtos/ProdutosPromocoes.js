import { getProdutosEmPromocao } from '../Dados/info_pizza';
import Produto from './Produto';
import './Produto.css'

function ProdutosPromocoes(){
    let produtos = getProdutosEmPromocao();
    return(
        <>
            <div>
                <div>
                    <h3 id="titulo-body">{"Produtos em promocoes"}</h3>
                    <div>
                        <a href='anterior'>4</a>
                        <div>
                            {produtos.map((produto)=>
                                <Produto item={produto} />
                            )}
                        </div>
                        <a href='proximo'>4</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProdutosPromocoes;