/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ItemPage.css"
import { useParams } from "react-router-dom";
import { getHotel } from "../../services/api";
import hotel_img from "../../images/hotel.svg";
import Button from "../../components/Button/Button"
import Loading from "../../components/Loading/Loading";
import { addToCart, removeFromCart } from "../../redux/hotels";


const ItemPage = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const { hotels } = useSelector((state) => state.hotelsInCart);
    const [isInCart, setIsInCart] = useState(false);

    const fetchHotel = async (id) => {
        setIsLoading(true)
        const hotel = await getHotel(id)
        setHotel(hotel)
        setIsLoading(false)
        const isHotelInCart = hotels.some(
            (existingHotel) => existingHotel.id === id
        );
        setIsInCart(isHotelInCart);
    }

    useEffect(() => {
        fetchHotel(id)
    }, [id])

    function addHotelToCart() {
        dispatch(addToCart(hotel));
        setIsInCart(true);
    }

    const characteristics = hotel.characteristics ? JSON.parse(hotel.characteristics) : []

    return (
        <div className="hotel_page conteiner">
            {isLoading ?
                <Loading />
                :
                <div className="hotel_info">
                    <img className="hotel_image" src={hotel_img} alt="hotel" />
                    <div className="characteristics">{characteristics.map((characteristic, index) => {
                        return <p className="characteristic" key={index}>{characteristic}</p>
                    })}</div>
                    <h3 className="name">{hotel.name}</h3>
                    <p className="text">{hotel.text}</p>
                    <h4 className="total_room">Total rooms: <h3>{hotel.total_rooms}</h3></h4>
                    <h4 className="price">Price: <h3>$ {hotel.price}</h3></h4>

                    <div className="hotel_menu">
                        <Button text="Go back" to="/hotels/" styleType="outline" />
                        {
                            isInCart ?
                                <Button text="Go to cart" styleType="filled"  to="/cart/"/>
                                :
                                <Button text="Add to cart" styleType="filled" onClick={(event) => { addHotelToCart() }} />
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default ItemPage;