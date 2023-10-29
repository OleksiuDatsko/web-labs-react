import React from "react";
import "./HotelCard.css"
import hotel from "../../../images/hotel.svg"
import Button from "../../Button/Button";

const HotelCard = ({ src = { hotel }, id, name, text, total_rooms, price }) => {
    console.log(id)
    return (
        <li key={id} className="hotel-card">
            <img src={src} alt="hotel img" />
            <h3>{name}</h3>
            <p>{text}</p>
            <div className="one_line_hotel_info">
                <b>
                    Price:
                </b>
                <p>
                    {price}
                </p>
            </div>
            <div className="one_line_hotel_info">
                <b>
                    Total rooms:
                </b>
                <p>
                    {total_rooms}
                </p>
            </div>
            <Button text="View more" styleType="outline" />
        </li>
    );
}

export default HotelCard