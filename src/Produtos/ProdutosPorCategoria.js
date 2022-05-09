import './Produto.css'

function ProdutosPorCategoria(prop){
    return(
        <div className="conteudo-pag">
            <h1>{"Cardápio de Pizza "+prop.categoria}</h1>
        </div>
    );
}
export default ProdutosPorCategoria;