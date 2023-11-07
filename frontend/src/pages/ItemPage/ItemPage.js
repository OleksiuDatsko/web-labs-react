import React, { useEffect, useState } from "react";
import "./ItemPage.css"
import { useParams } from "react-router-dom";
import { getHotel } from "../../services/api";
import hotel from "../../images/hotel.svg"
import Button from "../../components/Button/Button"

const HotelPage = ({ id, characteristics, name, text, total_rooms, price }) => {
    console.log({ id, name, characteristics, text, total_rooms, price })
    characteristics = characteristics ? JSON.parse(characteristics) : []
    return (
        <div className="hotel_info">
            <img className="hotel_image" src={hotel} alt="hotel" />
            <div className="characteristics">{characteristics.map((characteristic, index) => {
                return <p className="characteristic" key={index}>{characteristic}</p>
            })}</div>
            <h3 className="name">{name}</h3>
            <p className="text">{text}</p>
            <h4 className="total_room">Total rooms: <h3>{total_rooms}</h3></h4>
            <h4 className="price">Price: <h3>$ {price}</h3></h4>

            <div className="hotel_menu">
                <Button text="Go back" to="/hotels/" styleType="outline" />
                <Button text="Add to cart" styleType="filled" onClick={(event) => { console.log(hotel, event) }} />
            </div>
        </div>
    )
}


const ItemPage = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    console.log(hotel)
    console.log(isLoading)

    useEffect(() => {
        setIsLoading(true);
        getHotel(id, setHotel, setIsLoading)
    }, [id])

    return (
        <div className="hotel_page conteiner">
            {isLoading ?
                <div class="loader">Loading...</div>
                :
                HotelPage(hotel)
            }
        </div>
    );
};

export default ItemPage;