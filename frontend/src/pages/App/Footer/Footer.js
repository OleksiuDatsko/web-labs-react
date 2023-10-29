import React from "react";
import "./Footer.css"
import Logo from "../../../components/Logo/Logo"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="footer">
            <footer className="conteiner linear-sections">
                <Logo color="white" />
                <nav className="linear-nav">
                    <ul>
                        <li><Link to="/" className="footer__nav-item"> Home </Link></li>
                        <li><Link to="/hotels" className="footer__nav-item"> Hotels </Link></li>
                        <li><Link to="/cart" className="footer__nav-item"> Cart </Link></li>
                    </ul>
                </nav>
            </footer>
            <div className="footer__bottom">
                2023 IoT © Copyright all rights reserved
            </div>
        </section>
    );
};

export default Footer;