import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <Created />
            <Links />
        </div>
    );
}

function Created() {
    return <div className="footer__div">Created by Franciszek Cybruch</div>;
}

function Links() {
    return (
        <div className="footer__div">
            <a href="https://www.linkedin.com/in/franciszek-cybruch-86266329a/">
                <i className="bi bi-linkedin footer-icon"></i>
            </a>
            <a href="https://github.com/xKitsune47">
                <i className="bi bi-github footer-icon"></i>
            </a>
        </div>
    );
}
