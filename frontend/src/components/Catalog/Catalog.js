import React from "react";
import "./Catalog.css"

import { getAllHotels } from "../../services/api";
import hotel from "../../images/hotel.svg"

const hotels_from_backend = await getAllHotels() ? await getAllHotels() : [];

const SortHotels = (hotels, sortOption) => {
  if (sortOption === "name") {
    hotels.sort((hotel1, hotel2) => {
      const hotel1_name = hotel1.name.toUpperCase();
      const hotel2_name = hotel2.name.toUpperCase();
      if (hotel1_name < hotel2_name) {
        return -1;
      }
      if (hotel1_name > hotel2_name) {
        return 1;
      }
      return 0;
    });
  } else if (sortOption === "total_rooms") {
    hotels.sort((hotel1, hotel2) => {
      const hotel1_total_rooms = Number(hotel1.total_rooms);
      const hotel2_total_rooms = Number(hotel2.total_rooms);
      if (hotel1_total_rooms < hotel2_total_rooms) {
        return -1;
      }
      if (hotel1_total_rooms > hotel2_total_rooms) {
        return 1;
      }
      return 0;
    });
  } else if (sortOption === "price") {
    hotels.sort((hotel1, hotel2) => {
      const hotel1_price = Number(hotel1.price);
      const hotel2_price = Number(hotel2.price);
      if (hotel1_price < hotel2_price) {
        return -1;
      }
      if (hotel1_price > hotel2_price) {
        return 1;
      }
      return 0;
    });
  };
}

const findHotels = (hotels, option, prop) => {
  console.log(hotels, option, prop)
  if (option === '' || prop === '') {
    return hotels
  } 
  if (option === "name") {
    return hotels.filter((hotel) => hotel.name.search(prop) !== -1);
  }
  if (option === "total_rooms") {
    return hotels.filter((hotel) => hotel.total_rooms >= Number(prop));
  }
  if (option === "price") {
    return hotels.filter((hotel) => hotel.price <= Number(prop));
  }
  return hotels
}

const Catalog = (props) => {
  let hotels = props.hotels ? props.hotels : hotels_from_backend;
  hotels = hotels.slice(0, props.hotelsToRender && props.hotelsToRender < hotels.length ? props.hotelsToRender : undefined)
  console.log(hotels)

  hotels = findHotels(hotels, props.findBy, props.hotelsProp)

  SortHotels(hotels, props.sortBy)
  
  return (
    <section className="conteiner catalog">
      <ul className="hero_hotels-cards">
        {hotels.map(({ id, name, text, total_rooms, price, photo = hotel }) => {
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