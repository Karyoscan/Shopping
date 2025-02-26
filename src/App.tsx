import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Navbar from "./Companenet/Navbar";
import { ShoppinCartContentProvides } from "./Content/ShoppingCartContent";




function App() {
  return (
    <ShoppinCartContentProvides>
    <Navbar/>
    <div className="w-[95%] m-auto  ">
      <Routes>
        <Route path="/ShoppingCart" element={<Store />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
    </ShoppinCartContentProvides>
  );
}

export default App;
