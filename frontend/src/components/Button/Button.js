import React from "react";
import "./Button.css"
import { Link } from 'react-router-dom';


const DefaultButton = (props) => {
    return (
        <button
            className={
                `default-button
                ${props.styleType}
                ${props.size}
                ${props.noneBorder ? 'noneBorder' : ''}`
            }
            type={props.type}
            onClick={props.onClick}
        >
            {props.text || props.children}
        </button>
    );
}

const ButtonWithLink = (props) => {
    return (
        <Link to={props.to ? props.to : "/"}>
            {DefaultButton(props)}
        </Link>
    )
}

const Button = (props) => {
    if (props.to) {
        return ButtonWithLink(props)
    }
    return DefaultButton(props)
};

export default Button