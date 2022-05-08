import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <div id="nav">
            <ul className='menu'>
                <li>
                <a href="/cardapio" id='a-navbar'><Link to='/cardapio'>Cardápio</Link></a>
                <ul id='ul2'>
                    <li><a href='/promocoes'>Promocoes</a></li>
                    <li></li>
                </ul>
                </li>
            </ul>
            
        </div>
    );
}


export default NavBar;