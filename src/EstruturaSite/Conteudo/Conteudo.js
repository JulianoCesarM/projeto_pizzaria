import './Conteudo.css'
function Conteudo(prop)
{
    return(
        <div id="conteudo">
            <h2>{prop.titulo}dg</h2>
            {prop.children}
        </div>
    );
}
export default Conteudo;