import React from "react";
import "./Catalog.css"

import { getAllHotels } from "../../services/api";
import hotel from "../../images/hotel.svg"

const hotels_from_backend = await getAllHotels() ? await getAllHotels() : [];

const Catalog = (props) => {
    const hotels = props.hotels ? props.hotels : hotels_from_backend;
    return (
        <section className="conteiner catalog">
            <ul className="hero_hotels-cards">
                {hotels.slice(0, props.hotelsToRender && props.hotelsToRender < hotels.length ? props.hotelsToRender : undefined)
                    .map(({ id, name, text, total_rooms, price, photo = hotel}) => {
                        return <props.HotelCard
                            key={id}
                            src={photo}
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