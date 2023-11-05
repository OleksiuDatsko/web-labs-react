import React from "react";
import "./HotelCard.css"

const HotelCard = (props) => {
    return (
        <li className="hotel-card">
            <img src={props.src} alt="hotel img"/>
            <h3>{props.name}</h3>
            <p>{props.text}</p>
        </li>
    );
};

export default HotelCard;