import React, { useState } from "react";
import "./Home.css"
import Button from "../../components/Button/Button"
import HotelCard from "../../components/home/HotelCard/HotelCard";
import hotel_hero from "../../images/hotel_hero.svg"
import Catalog from "../../components/Catalog/Catalog";
import { getAllHotels } from "../../services/api";

const hotels = await getAllHotels() ? await getAllHotels() : [];


const Home = () => {
    const [hotelsToRender, setHotelsToRender] = useState(3);
    return (
        <section className="conteiner home__hero">
            <div className="conteiner hero">
                <div className="hero__hotel-shop">
                    <h1 className="title hero">Hotels shop</h1>
                    <p className="paragraph hero">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis massa, fermentum id leo vitae, vulputate commodo metus. Maecenas facilisis finibus ipsum, sed pulvinar massa.
                    </p>
                    <div className="home__button">
                        <Button text="Buy today!" styleType="filled" to="/hotels" />
                    </div>
                </div>
                <img
                    className="hero__image"
                    src={hotel_hero}
                    alt="Virtual healthcare for you"
                />
            </div>
            <div>
                <Catalog HotelCard={HotelCard} hotelsToRender={hotelsToRender} hotels={hotels} />
            </div>
            <div className="home__button">
                {hotelsToRender < hotels.length ?
                    <Button text="View more" styleType="outline" onClick={() => { setHotelsToRender(hotelsToRender + 3) }} /> :
                    undefined
                }
            </div>
        </section>
    );
};

export default Home;