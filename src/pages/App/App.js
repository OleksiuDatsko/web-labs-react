import React from "react";
import Header from "./Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Navigation />
        <Footer />
      </Router>
    </div>
  );
};

export default App;