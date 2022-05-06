import { GetPizza } from '../Dados/info_pizza';
import Produto from './Produto';
import './ProdutosEmPromocao.css'

function ProdutosEmPromocao(prop){
    let produtos = GetPizza(+prop.idcategoria)
    return(
        <>
        
        {produtos.map((pizza)=>
            <Produto item={pizza}/>
        )}
        </>
    );

}
export default ProdutosEmPromocao;