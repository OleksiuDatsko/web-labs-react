import React from "react";
import "./Button.css"
import { Link } from 'react-router-dom';


const Button = (props) => {
    return (
        <Link to={ props.to ? props.to : "/"}>
            <button className={`default-button ${props.styleType} ${props.size}`}>
                {props.text}
            </button>
        </Link>
    );
};

export default Button