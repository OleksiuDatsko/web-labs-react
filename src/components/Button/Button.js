import React from "react";
import "./Button.css"

const Button = (props) => {
    return (
        <button className={`default-button ${props.styleType}`}>
            {props.text}
        </button>
    );
};

export default Button