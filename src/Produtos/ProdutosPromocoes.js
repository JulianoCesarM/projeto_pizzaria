import { getProdutosEmPromocao } from '../Dados/info_pizza';
import Produto from './Produto';
import './ProdutosPromocoes.css'

function ProdutosPromocoes(){
    let produtos = getProdutosEmPromocao();
    return(
        <>
            <div id='conteudo-pag-promo'>
                <div id=''>
                    <h3 id="titulo-body">{"Produtos em promocoes"}</h3>
                    <div id='container-pag-promo'>
                        <div id='container-pag-promo-conteudo'>
                            {produtos.map((produto)=>
                                <Produto item={produto} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProdutosPromocoes;