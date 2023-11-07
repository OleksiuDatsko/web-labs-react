import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../Home/Home"
import Hotels from "../Hotels/Hotels"
import ItemPage from "../ItemPage/ItemPage";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="hotels/:id" element={<ItemPage />} />
        </Routes>
    );
};

export default Navigation;