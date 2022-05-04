import { Infos_pizzaria_endereco, Infos_pizzaria_telefone, Infos_pizzaria_whatsapp } from '../../Dados/Infos_pizzaria';
import './Rodape.css'


function Rodape(prop)
{
    return(
        <>
            <div id="rodape">
                <div id="rodape-conteudo">
                    <div id='endereco'>
                        <div><p>Telefone: <Infos_pizzaria_telefone></Infos_pizzaria_telefone></p></div>
                        <div><p>Endereço: <Infos_pizzaria_endereco></Infos_pizzaria_endereco></p></div>
                        <div><p>WhatsApp: <Infos_pizzaria_whatsapp></Infos_pizzaria_whatsapp></p></div>
                    </div>

                    <div id="RSocial">
                        <ul ><a href='https://www.instagram.com/?hl=en'><img src='../Imagem/'></img>Instagram</a></ul>
                        <ul ><a href='https://www.facebook.com/'><img src='../Imagem/'></img>Facebook</a></ul>
                        <ul ><a href='https://www.tiktok.com/en/'><img src='../Imagem/'></img>Tiktok</a></ul>
                    </div>
                </div>    
            </div>   
            <div id="copy">{prop.texto}</div>
            
        </>
    );
}
export default Rodape;