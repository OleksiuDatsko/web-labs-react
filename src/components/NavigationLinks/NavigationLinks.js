import React from "react";
import "./NavigationLinks.css"
import { Link } from 'react-router-dom';


const NavigationLinks = (props) => {
    return (
        <Link to={props.to}>
            {props.text}
        </Link>
    );
};

export default NavigationLinks;