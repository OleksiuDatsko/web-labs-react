import React, { useEffect, useState } from "react";
import "./Catalog.css"

import { getAllHotels } from "../../services/api";
import hotel from "../../images/hotel.svg"
import Loading from "../Loading/Loading";

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
  if (option === '' || prop === '') {
    return hotels
  }
  if (option === "name") {
    return hotels.filter((hotels) => hotels.name.search(prop) !== -1);
  }
  if (option === "total_rooms") {
    return hotels.filter((hotels) => hotels.total_rooms >= Number(prop));
  }
  if (option === "price") {
    return hotels.filter((hotels) => hotels.price <= Number(prop));
  }
  return hotels
}

const Catalog = (props) => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllHotels = async (props) => {
    setIsLoading(true)

    const hotels = props.hotels ?
      props.hotels.slice(0, props.hotelsToRender && props.hotelsToRender < props.hotels.length ? props.hotelsToRender : undefined)
      :
      await getAllHotels(props.hotelName ? { name: props.hotelName } : undefined) || []

    SortHotels(hotels, props.sortBy)

    setHotels(findHotels(hotels, props.findBy, props.hotelsProp))
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAllHotels(props)
  }, [props])

  return (
    <>
      <div className={isLoading ? "loading" : "loaded"}>
        {isLoading && <Loading />}
      </div>
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
    </>
  );
};

export default Catalog