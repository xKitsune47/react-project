import "./Header.css";
import logo from "./templogo.jpg";

export default function Header() {
    return (
        <div className="header">
            <img src={logo} className="header__image" alt="logo" />
        </div>
    );
}
