import './User_login.css'


function Login(){
    return(
        <>
            <div id='sa'>
                
                <div id='dsa'>
                    <h1>Efetuar login</h1>
                    <div>
                        <p>Usuário: </p>
                        <input type="text" placeholder='...'/>
                    </div>
                    <div>
                        <p>Senha: </p>
                        <input type="text" placeholder='...'/>
                    </div>
                    <a href='#'>Esqueceu a senha?</a>
                    <a href='#' id='gbf'>Entrar</a>
                </div>
            </div>
        </>
    );
}
export default Login;