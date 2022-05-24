import { useEffect, useState } from "react";
import { api } from "../Services/API";
import Produto from './Produto';
import './Produto.css'
import Conteudo from '../EstruturaSite/Conteudo/Conteudo';
function ProdutosPromocoes(){
    
    const [produtos, setProdutos] = useState([])

    useEffect(()=>{
        api.get('/products/sale').then(function ({data}) {
            setProdutos(data)
        })
    },[])
    return(
        <>
        <Conteudo>
            <div id='conteudo-pag-promo'>
                <div id=''>
                    <h3 id="titulo-body">{"Produtos em promocoes"}</h3>
                    <div id='container-pag-promo'>
                        <div id='container-pag-promo-conteudo'>
                            {produtos.map((produto)=>
                                <Produto item={produto}  linkadicionar/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Conteudo>
        </>
    );
}
export default ProdutosPromocoes;