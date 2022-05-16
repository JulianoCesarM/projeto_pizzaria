import { getProdutoNome } from './Dados/info_pizza';
import { useState } from 'react';
import './Home.css'
import ProdutosPromocoes from './Produtos/ProdutosPromocoes';
import Produto from './Produtos/Produto';
import Conteudo from './EstruturaSite/Conteudo/Conteudo';


function Home(){
    const [busca, setBusca] = useState();
    let produtos = getProdutoNome(busca);
    console.log(produtos);
    function Mostrar(){
        if (busca !== " ") {
            return(
                <Conteudo>
                <div id='div-home-conteudo'>
                    {produtos.map((produto)=>
                                <Produto item={produto} />
                            )}
                </div>
                </Conteudo>
            )
            
        }else{
            return(
                <div id='div-home-conteudo'>
                    <h3>Digite um valor válido</h3>
                </div>
            )
        }
        
    }
    return(
        <>
            <ProdutosPromocoes/>
            <div >
                <div id='div-home'>
                    <h2>Pesquisar: </h2>
                    <input type="search" id='cx-texto-pesquisa' placeholder=' ...' 
                     onChange={(e) => setBusca(e.target.value)} value={busca}/>
                </div>
                <Mostrar/>
            </div>
        </>
    );
}
export default Home;