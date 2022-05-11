import './Rodape.css'


function Rodape(prop)
{
    return(
        <>
            <div id="rodape">
                <div id="rodape-container">
                    <div id='rodape-endereco-contato'>
                        <h2>Funcionamento</h2>
                        <p>Terça a Sexta das 19:00 as 24:00<br/>Sabado e Domingo das 17:00 as 24:00</p>
                        <div>
                            <br/>
                            <h3>Endereço</h3>
                            <p>
                                <b>Pizzaria ...</b>
                                <br/>
                                Endereço: av.isdsdasdnmaui, 1520 - dsahbdahbd
                                <br/>
                                Jundiaí - SP - CEP: 15488-455
                            </p>
                        </div>
                    </div>
                    <div id="rodape-contatos">
                        <h3>Contatos</h3>
                            
                        <p>Telefone: <br/>(11) 5648-5684<br/><br/>
                        WhatsApp: <br/>(11) 948598459</p>
                        <p>Informações<br/><a href='https://outlook.live.com/'>contato@pizzaria....com</a></p>
                    </div>
                </div>
                <br/>
                <div id='rodape-RSociais'>
                    <div id="">
                        <h3>Redes Sociais</h3>
                        <a id='RSociais' href='https://www.instagram.com/?hl=en'><img src='../Imagem/'></img> Instagram</a>
                        <a id='RSociais' href='https://www.facebook.com/'><img src='../Imagem/'></img> Facebook</a>
                        <a id='RSociais' href='https://www.tiktok.com/en/'><img src='../Imagem/'></img> Tiktok</a>
                    </div>
                </div><div id="copy">{prop.texto}</div>
            </div>
        </>
    );
}
export default Rodape;