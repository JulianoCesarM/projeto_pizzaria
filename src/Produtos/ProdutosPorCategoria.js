import Conteudo from '../EstruturaSite/Conteudo/Conteudo';
import Produto from './Produto';
import './Produto.css'
import { useEffect, useState } from "react";
import { api } from "../Services/API";

function ProdutosPorCategoria(prop){
    const [produtos, setProdutos] = useState([])

    const idcategoria = prop.categoria

    useEffect(()=>{
        api.get('/products/category'+idcategoria).then(function ({data}) {
            setProdutos(data)
        })
    },[idcategoria])

    return(
        <>
        <Conteudo>
            <div className="conteudo-pag">
                <h1 id="titulo-body">{"Cardápio de Pizza "+prop.categoria}</h1>
                {produtos.map((produto)=>
                    <Produto item={produto} />
                )}
            </div>
        </Conteudo>
        </>
    );
}
export default ProdutosPorCategoria;