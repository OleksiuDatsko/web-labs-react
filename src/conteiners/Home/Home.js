import React from "react";
import "./Home.css"
import Button from "../../components/Button/Button"
import HotelCard from "../../components/home/HotelCard/HotelCard";
import hotel_hero from "../../images/hotel_hero.svg"
import hotel from "/home/oleksii/Documents/Web/web-programing-react/hotels/src/images/hotel.svg"

const hotelText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis massa, fermentum id leo vitae, vulputate commodo metus. Maecenas facilisis finibus ipsum, sed pulvinar massa."

const Home = () => {
    return (
        <section className="conteiner home__hero">
            <div className="conteiner hero">
                <div className="hero__hotel-shop">
                    <h1 className="title hero">Hotels shop</h1>
                    <p className="paragraph hero">
                        {hotelText}
                    </p>
                    <div className="home__button">
                        <Button text="Consult today" styleType="filled" />
                    </div>
                </div>
                <img
                    className="hero__image"
                    src={hotel_hero}
                    alt="Virtual healthcare for you"
                />
            </div>
            <div>
                <ul className="hero_hotels-cards">
                    <HotelCard title="Hotel1" text={hotelText} src={hotel} />
                    <HotelCard title="Hotel1" text={hotelText} src={hotel} />
                    <HotelCard title="Hotel1" text={hotelText} src={hotel} />
                </ul>
            </div>
            <div className="home__button">
                <Button text="View more" styleType="outline" />
            </div>
        </section>
    );
};

export default Home;