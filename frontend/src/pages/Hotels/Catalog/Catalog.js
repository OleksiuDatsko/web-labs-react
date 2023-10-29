import React from "react";
import "./Catalog.css"

import { getAllHotels } from "../../../services/api";
import HotelCard from "../../../components/catalog/HotelCard/HotelCard"
import hotel from "../../../images/hotel.svg"

const hotels = await getAllHotels() ? await getAllHotels() : [];

const Catalog = () => {
    console.log(hotels);
    return (
        <section className="conteiner catalog">
            <ul className="hero_hotels-cards">
                {hotels.map(({ id, name, text, total_rooms, price }) => {
                    return <HotelCard
                        key={id}
                        src={hotel}
                        id={id}
                        name={name}
                        text={text}
                        total_rooms={total_rooms}
                        price={price}
                    />
                })}
            </ul>
        </section>
    );
};

export default Catalog