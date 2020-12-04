import Link from 'next/link';
import Head from "next/head";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../assets/css/styles.css";

function projectsTop(props) {
    return (
        <div>
            <Head>
                <title>Victor Betini | PHP Developer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>
            <div className="back">
                <Link href="/">
                    <a title="Voltar"><AiOutlineArrowLeft size={30} /></a>
                </Link>
            </div>
            <div className="projects">
                <div className="top">
                    <Link href="/">
                        <a title="Home">
                            <div className="photo"></div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default projectsTop;
