import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css"
import Catalog from "../../components/Catalog/Catalog";
import HotelCard from "../../components/cart/HotelCard/HotelCard";
import Button from "../../components/Button/Button";


const Cart = () => {
    const { hotels } = useSelector((state) => state.hotelsInCart);
    return (
        <section className="cart">
            <div className="cart conteiner">
                <h1 className="cart__title">
                    Hotels Cart
                </h1>
                <h3 className="cart__total-amount">
                    Total amount:{"  "}
                    $ {hotels.reduce((total, hotel) => total + parseInt(hotel.price), 0)}
                </h3>
                <Catalog HotelCard={HotelCard} hotels={hotels} />
                <div className="cart__buttons">
                    <Button text="Back to catalog" styleType="outline" to="/hotels" />
                    {hotels.length !== 0 && <Button text="Continue" styleType="filled" />}
                </div>
            </div>
        </section>
    );
};

export default Cart;