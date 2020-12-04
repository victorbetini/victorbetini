import Link from 'next/link';
import Head from 'next/head';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

import Top from '../components/top';
import Footer from '../components/footer';

function App() {
    return (
        <div>
            <div className="main-content">
                <Top/>
                <h4 className="description">Alguns de meus projetos:</h4>
                <div className="grid">
                    <Link href="/dolar-bot">
                        <a>
                            <div className="card">
                                <article>
                                    <header>
                                        <h2><FaDiscord/> DolarBot</h2>
                                    </header>
                                    <p>Um Bot para Discord que mostar a cotação do dolar, euro, bitcoin e outras
                                        moedas.</p>
                                </article>
                            </div>
                        </a>
                    </Link>

                    <Link href="/whatsapp-speed-audio">
                        <a>
                            <div className="card">
                                <article>
                                    <header>
                                        <h2><AiOutlineWhatsApp/> WhatsApp Speed Audio</h2>
                                    </header>
                                    <p>Uma extensão que acelera os audios do WhatsApp Web</p>
                                </article>
                            </div>
                        </a>
                    </Link>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
