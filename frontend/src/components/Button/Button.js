import React from "react";
import "./Button.css"
import { Link } from 'react-router-dom';


const DefaultButton = (props) => {
    return (
        <button className={
            `default-button
                ${props.styleType}
                ${props.size}
                ${props.noneBorder ? 'noneBorder' : ''}`
        }>
            {props.text}
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