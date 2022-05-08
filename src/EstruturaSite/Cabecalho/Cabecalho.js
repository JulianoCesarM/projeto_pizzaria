import './Cabecalho.css'

function Cabecalho(prop)
{
    return(
        <div id="cabecalho">
            <div id='conteudo-cab'>
                <div id='logo'>
                    <a id="linktopo" href="/">{prop.titulo}</a>
                </div>  
                <div id='wrap-left'>
                    <input type="text"></input>
                    <a href='#'>Pesquisa</a>
                
                    <div id='lo-se'>
                        <a href='#'>Entrar</a>|
                        <a href='#'>Cadastre-se</a>
                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cabecalho;