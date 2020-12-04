import Footer from '../components/footer';
import Top from '../components/projectsTop';

import { BsArrowUpRight } from "react-icons/bs";

function dolarBot() {
    return (
        <div className="projects">
            <div className="main-content">
                <Top />
                <div className="project-content">
                    <h2>DolarBot</h2>
                    <p className="description">Veja a cotação de diversas moedas estrangeiras dentro do Discord!</p>
                    <p className="description">
                        Bot feito utilizando a biblioteca <a href="https://discord.js.org/#/" target="_blank">DicordJS</a>
                        , o módulo <a href="https://github.com/axios/axios" target="_blank">Axios</a> e
                        a <a href="https://hgbrasil.com/" target="_blank">HG API</a></p>
                    <h3>Cotações:</h3>
                    <ul>
                        <li>Dólar (USD)</li>
                        <li>Euro (EUR)</li>
                        <li>Libra (GBP)</li>
                        <li>BitCoin (BTC)</li>
                    </ul>
                    <h3>Comandos:</h3>
                    <p className="description">prefixo: $</p>
                    <ul>
                        <li>$dolar</li>
                        <li>$euro</li>
                        <li>$libra</li>
                        <li>$bitcoin</li>
                    </ul>
                    <p className="description">Ajuda:</p>
                    <ul>
                        <li>$help</li>
                    </ul>
                    <p className="description">Para convidar o Bot para seu servidor <a
                        href="https://discordapp.com/api/oauth2/authorize?client_id=692821504941097011&permissions=8&scope=bot"
                           target="_blank">clique aqui <BsArrowUpRight /></a>.</p>
                    <p className="description"><a href="https://github.com/victorbetini/DolarBot" target="_blank">Repositório <BsArrowUpRight /></a></p>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default dolarBot;
