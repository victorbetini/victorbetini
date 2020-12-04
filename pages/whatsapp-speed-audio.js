import Link from 'next/link';
import Footer from '../components/footer';
import Top from '../components/projectsTop';
import {BsArrowUpRight} from "react-icons/bs";

function whatsappSpeedAudio() {
    return (
        <div className="projects">
            <div className="main-content">
                <Top />
                <div className="project-content">
                    <h2>WhatsApp Speed Audio</h2>
                    <p className="description">Acelere os áudios do seu WhatsApp Web</p>
                    <p className="description"><a href="https://github.com/victorbetini/whatsapp-speed-audio" target="_blank">Repositório <BsArrowUpRight /></a></p>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default whatsappSpeedAudio;
