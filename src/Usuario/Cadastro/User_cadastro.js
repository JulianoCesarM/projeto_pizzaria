import './User_cadastro.css'

function Cadastro(){
    return(
        <>
            <div id='sa'>
                <div id='cadastro-itens'>
                    <h1>Cadastre-se</h1>
                    <div id='div-itens-cadastro'>
                        <p>Nome completo *</p>
                        <input type="text" placeholder='...'/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cadastro;