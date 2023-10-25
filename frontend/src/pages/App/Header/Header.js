import React from "react";
import "./Header.css"
// import NavigationLinks from "../../../components/NavigationLinks/NavigationLinks"
import { NavLink } from 'react-router-dom';
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
                        <li><NavLink to="/" className="header__nav-item"> Home </NavLink></li>
                        <li><NavLink to="/hotels" className="header__nav-item" > Hotels </NavLink></li>
                        <li><NavLink to="/cart" className="header__nav-item" > Cart </NavLink></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Header;