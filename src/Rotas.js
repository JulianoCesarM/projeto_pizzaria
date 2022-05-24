import NavBar from "./EstruturaSite/NavBar/NavBar";
import Cadastro from "./Usuario/User_cadastro";
import Login from "./Usuario/User_login";
import ProdutosCardapio from "./Produtos/ProdutosCardapio";
import ProdutosPorCategoria from "./Produtos/ProdutosPorCategoria";
import Home from "./Home";

const { BrowserRouter, Routes, Route } = require("react-router-dom");


function Rotas()
{

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cardapio" element={<ProdutosCardapio/>} />
                <Route path="/ProdutosTradicional" element={<ProdutosPorCategoria categoria="tradicional"/>} />
                <Route path="/ProdutosDoce" element={<ProdutosPorCategoria categoria="doce"/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/carrinho" element={<h1>Meu carrinho</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;