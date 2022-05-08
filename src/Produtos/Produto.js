import './Produto.css'
function Produto(prop)
{
    return(
        <div className="produto">
            <h3>{prop.item.nome}</h3>

            <img id="img-pizza-render" src={prop.item.imagem}/>
            <p>{prop.item.ingrdientes}</p>
            <p>R$ {prop.item.preco}</p>
        </div>
    );
}
export default Produto;