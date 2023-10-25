import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../Home/Home"
import Hotels from "../Hotels/Hotels"

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="hotels" element={<Hotels />} />
        </Routes>
    );
};

export default Navigation;