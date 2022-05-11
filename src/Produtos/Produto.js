import './Produto.css'
function Produto(prop)
{
    return(
        <div className="produto">
            <div id='sdad'>
                <h3>{prop.item.nome}</h3>
                <div>
                    <img id="img-pizza-render" src={prop.item.imagem}/>
                    <p>{prop.item.ingrdientes}</p>
                </div>
            </div>
            <div id="dsad">
                <p>R$ {prop.item.preco}</p>
                <a href='#'>Comprar</a>
            </div>
        </div>
    );
}
export default Produto;