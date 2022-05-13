import { getProdutoNome } from './Dados/info_pizza';
import Produto from './Produtos/Produto';

import { useState } from 'react';
import './Home.css'
import ProdutosPromocoes from './Produtos/ProdutosPromocoes';

function Home(){
    const [busca, setbusca] = useState([]);
    let produtos = getProdutoNome(busca);
    console.log(produtos);
    
    return(
        <>
            <ProdutosPromocoes/>
            <div >
                <div id='div-home'>
                    <h2>Pesquisar: </h2>
                    <input type="text" id='cx-texto-pesquisa' placeholder='...' 
                    onChange={(e) => setbusca(e.target.value)} value={busca}/>
                </div>
                <div id='div-home-conteudo'>
                    <Produto item={produtos} />
                </div>
                
                
            </div>
        </>
    );
}
export default Home;