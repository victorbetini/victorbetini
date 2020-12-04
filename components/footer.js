import {AiFillGithub} from "react-icons/ai";

function Footer() {
    return (
        <footer>
            <div className="social">
                <a href="https://github.com/victorbetini" title="github.com/victorbetini" target="_blank">
                    <AiFillGithub size={28}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
