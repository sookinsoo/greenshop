import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./components/Navbar/Nav";
import Shop from "./Pages/Shop";
import ShoppingCard from "./Pages/ShoppingCard";
import Footer from "./components/Footer/Footer";
import Care from "./Pages/Care";
import Blogs from "./Pages/Blogs";
import Checkout from "./Pages/Checkout";
import Modal from "./Pages/Modal";
import AboutCard from "./components/Shop/AboutCard";
import Login from "./Pages/Login";

export const AboutContext = createContext();
export const ProductContext = createContext();

const App = () => {
  const [about, setAbout] = useState([]);
  const [product, setProduct] = useState([]);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      <AboutContext.Provider value={{ about, setAbout }}>
        <div className="max-w-[1200px] mx-auto">
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/care" element={<Care />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/shop/card" element={<ShoppingCard />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/blogs" element={<Modal />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </AboutContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
