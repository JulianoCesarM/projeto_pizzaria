import './NavBar.css'

function NavBar(){
    return(
        <div id="nav">
            <ul className='menu'>
                <li>
                <a href="/cardapio" id='a-navbar'>Cardápio</a>
                <ul>
                    <li><a href='/ProdutosTradicional' >Pizza tradicional</a></li>
                    <li><a href='/ProdutosDoce' >Pizza doce</a></li>
                </ul>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;