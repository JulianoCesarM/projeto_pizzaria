import { getProdutoNome } from './Dados/info_pizza';
import { useState } from 'react';
import './Home.css'
import ProdutosPromocoes from './Produtos/ProdutosPromocoes';
import Produto from './Produtos/Produto';


function Home(){
    const [busca, setBusca] = useState();
    let produtos = getProdutoNome(busca);
    console.log(produtos);
    function Mostrar(){
        if (busca !== "" && busca !== null && busca !== " ") { /* falta fazer o tratamento de erro e a busca por letra digitado*/ 
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
            <ProdutosPromocoes/>
            <div id='div-home-conteudo'>
                <div id='div-home'>
                    <h2>Pesquisar: </h2>
                    <input type="search" id='cx-texto-pesquisa' placeholder=' ...' 
                     onChange={(e) => setBusca(e.target.value)} value={busca}/><br/>
                </div>
                <Mostrar/>
            </div>
        </>
    );
}
export default Home;