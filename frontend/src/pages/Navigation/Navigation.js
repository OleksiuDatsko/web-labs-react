import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../Home/Home"
import Hotels from "../Hotels/Hotels"
import ItemPage from "../ItemPage/ItemPage";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";

const Navigation = () => {
    const [userInfo, setUserInfo] = useState({})
    console.log(userInfo)
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="hotels/:id" element={<ItemPage />} />
            <Route path="cart/" element={<Cart />} />
            <Route path="checkout/" element={<Checkout state={setUserInfo}/>}/>
            <Route path="checkout/success" element={<h1>success</h1>}/>

        </Routes>
    );
};

export default Navigation;