import React, {useState} from "react";
import Filters from "./Filters/Filters";
import Catalog from "../../components/Catalog/Catalog";
import HotelCard from "../../components/catalog/HotelCard/HotelCard";

const Hotels = () => {
    const [sortBy, setSortBy] = useState("name")
    const [hotelsProp, setHotelsProp] = useState("")
    const [findBy, setFindBy] = useState("name")


    return (
        <>
            <Filters setSortBy={setSortBy} setFindBy={setFindBy} setHotelsProp={setHotelsProp}/>
            <Catalog HotelCard={HotelCard} sortBy={sortBy} findBy={findBy} hotelsProp={hotelsProp}/>
        </>
    );
};

export default Hotels