import './Produto.css'
import {Context} from '../Context/DadosGlobais'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function Produto(prop)
{
    const {CarrinhoAcoes} = useContext(Context)
    const navigate = useNavigate()

    function handleAdicionar(evt)
    {
        const item = {
            idproduto: prop.item.codigo,
            qtd: 1,
            nome: prop.item.nome,
            preco: prop.item.preco,
        }

        CarrinhoAcoes.addItemCarrinho(item)

        navigate('/carrinho');
    }
    return(
        <div className="produto">
            <div id='sdad'>
                <h3>{prop.item.nome}</h3>
                <div>
                    <p>{prop.item.ingrdientes}</p>
                </div>
            </div>
            <div id="dsad">
                <p>R$ {prop.item.preco}</p>
                {
                prop.linkadicionar &&
                <p><a href="#adicionar" onClick={handleAdicionar}>Comprar</a></p>
                }
            </div>
        </div>
    );
}
export default Produto;