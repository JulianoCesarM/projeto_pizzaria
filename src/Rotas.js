import NavBar from "./EstruturaSite/NavBar/NavBar";
import Cadastro from "./EstruturaSite/Usuario/Cadastro/User_cadastro";
import Login from "./EstruturaSite/Usuario/Login/User_login";
import ProdutosCardapio from "./Produtos/ProdutosCardapio";
import ProdutosPorCategoria from "./Produtos/ProdutosPorCategoria";
import ProdutosPorNome from "./Produtos/ProdutosPorNome";

const { BrowserRouter, Routes, Route } = require("react-router-dom");


function Rotas()
{

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/cardapio" element={<ProdutosCardapio/>} />
                <Route path="/promocoes" element={<h1>Promoções</h1>} />
                <Route path="/ProdutosTradicional" element={<ProdutosPorCategoria categoria="Tradicional"/>} />
                <Route path="/ProdutosDoce" element={<ProdutosPorCategoria categoria="Doce"/>} />
                <Route path="/ProdutosNome" element={<ProdutosPorNome/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/carrinho" element={<h1>Meu carrinho</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;