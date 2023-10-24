import React from "react";
import "./Footer.css"
import Logo from "../../../components/Logo/Logo"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="footer">
            <footer className="conteiner linear-sections">
                <Logo color="white" />
                <nav id="nav-links" className="linear-nav">
                    <ul>
                        <li><Link to="/" className="footer__nav-item"> Home </Link></li>
                        <li><Link to="/hotels" className="footer__nav-item"> Hotels </Link></li>
                    </ul>
                </nav>
            </footer>
            <div className="footer__bottom">
                2020 IoT © Copyright all rights reserved, bla bla
            </div>
        </section>
    );
};

export default Footer;