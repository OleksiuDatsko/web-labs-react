import React from "react";
import "./HotelCard.css"

const HotelCard = (props) => {
    return (
        <li className="home-hotel-card">
            <img src={props.src} alt="hotel img"/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </li>
    );
};

export default HotelCard;