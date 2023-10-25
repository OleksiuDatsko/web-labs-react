import React from "react";
import "./Logo.css"

const Logo = (props) => {
    return (
        <h1 className="logo" style={{color: props.color}}>Hotels <b>Shop</b></h1>
    );
};

export default Logo