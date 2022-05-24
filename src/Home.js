import { useEffect, useState } from "react";
import { api } from "./Services/API";
import './Home.css'
import ProdutosPromocoes from './Produtos/ProdutosPromocoes';
import Produto from './Produtos/Produto';
import Conteudo from './EstruturaSite/Conteudo/Conteudo';


function Home(){
    const [produtos, setProdutos] = useState([])
    const [busca, setBusca] = useState();

    useEffect(()=>{
        console.log(busca);
        api.get('/products/name').then(function ({data}) {
            setProdutos(data)
        })
    },[])
    
    function Mostrar(){
        if (busca !== "" && busca !== null && busca !== " ") { 
            return(
                <div id='div-home-res-conteudo'>
                    {produtos.map((produto)=>
                        <Produto item={produto} />
                    )}
                </div>
            )
        }else{
            return(
                <div id='div-home-conteudo-pesq-erro'>
                    <h3><br/>Produto não encontrado ou verifique sua ortografia.</h3>
                </div>
            )
        }
    }
    return(
        <>
        <Conteudo>
            <ProdutosPromocoes/>
            <div id='div-home-conteudo'>
                <div id='div-home'>
                    <label  htmlFor="cx-texto-pesquisa">Pesquisar: </label>
                    <input type="search" id='cx-texto-pesquisa' placeholder=' ...' 
                     onChange={(e) => setBusca(e.target.value)} value={busca}/><br/>
                </div>
                <Mostrar/>
            </div>
        </Conteudo>
        </>
    );
}
export default Home;