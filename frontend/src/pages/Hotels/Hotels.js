import React from "react";
import Filters from "./Filters/Filters";
import Catalog from "../../components/Catalog/Catalog";
import HotelCard from "../../components/catalog/HotelCard/HotelCard";

const Hotels = () => {
    return (
        <>
            <Filters />
            <Catalog HotelCard={HotelCard}/>
        </>
    );
};

export default Hotels