import NavBar from "./EstruturaSite/NavBar/NavBar";
import Login from "./EstruturaSite/Usuario/Login/User_login";
import ProdutosCardapio from "./Produtos/ProdutosCardapio";
import ProdutosPorCategoria from "./Produtos/ProdutosPorCategoria";

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
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<h1>Efetuar cadastro</h1>} />
                <Route path="/carrinho" element={<h1>Meu carrinho</h1>} />
            </Routes>
        
        </BrowserRouter>
    );
}
export default Rotas;