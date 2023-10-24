import React from "react";
import "./Header.css"
// import NavigationLinks from "../../../components/NavigationLinks/NavigationLinks"
import { Link } from 'react-router-dom';
import Logo from "../../../components/Logo/Logo"

const Header = () => {
    return (
        <section className="conteiner">
            <div className="linear-sections">
                <div className="header__left">
                    <Logo />
                </div>
                <nav>
                    <ul className="header__right">
                        <li><Link to="/hotels"> Hotels </Link> </li>
                        <li><Link to="/"> Home </Link> </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Header;