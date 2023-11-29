import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/hotels";
import "./HotelCard.css"
import hotel from "../../../images/hotel.svg"
import Button from "../../Button/Button";

const HotelCard = ({ src = { hotel }, id, name, text, total_rooms, price }) => {
    const dispatch = useDispatch();

    function removeHotelFromCart() {
        dispatch(removeFromCart(id));
    }

    return (
        <li key={id} className="cart-hotel-card">
            <img src={src} alt="hotel img" />
            <h3 className="hotel_name">{name}</h3>
            <div className="hotel__price">
                <b>
                    Price:
                </b>
                <p>
                    {price}
                </p>
            </div>
            <Button text="Remove" styleType="outline" onClick={() => removeHotelFromCart()} />
        </li>
    );
}

export default HotelCard