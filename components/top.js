import Head from "next/head";
import "../assets/css/styles.css";

function Top() {
    return (
        <div>
            <Head>
                <title>Victor Betini | PHP Developer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>
            <div className="top">
                <div className="photo"></div>
                <h1 className="logo">
                    Victor Betini
                </h1>
                <p className="description">Desenvolvedor Full Stack PHP, aprendendo Next.js</p>
            </div>
        </div>
    );
}

export default Top;
