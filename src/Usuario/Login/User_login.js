import './User_login.css'


function Login(){
    return(
        <>
            <div id='sa'>
                
                <div id='dsa'>
                    <h1>Efetuar login</h1>
                    <div id='div-itens-login'>
                        <p>Usuário: </p>
                        <input type="text" placeholder='...'/>
                    </div>
                    <div id='div-itens-login'>
                        <p>Senha: </p>
                        <input type="text" placeholder='...'/>
                    </div>
                    <div id='div-itens-login'>
                        <a href='#' id='redef-senha'>Esqueceu a senha?</a>
                        <a href='#' id='gbf'>Entrar</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;