import { useEffect, useState } from "react";
import { api } from "../Services/API";
import Conteudo from '../EstruturaSite/Conteudo/Conteudo';
import Produto from './Produto';

function ProdutosCardapio(){
    const [produtos, setProdutos] = useState([])
    useEffect(()=>{
        api.get('/products/all').then(function ({data}) {
            setProdutos(data)
        })
    },[])
    return(
        <>
        <Conteudo>
            <div className="conteudo-pag">
                <h1 id="titulo-body">Cardápio de Pizzas</h1>
                {produtos.map((produto)=>
                    <Produto item={produto} linkadicionar/>
                )}
            </div>
        </Conteudo>
        </>
    );
}
export default ProdutosCardapio;