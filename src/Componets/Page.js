import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Collections from "./Collections";
import Header from "./Header";
import Men from "./Men";
import Sidebar from "./Sidebar";
import Women from "./Women";
import About from "./About";
import Contact from "./Contact";
import Image from "./Image";
import "./styles/page.css";
function Page() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((Prev) => !Prev);
  };

  const [quantity, setQuantity] = useState(0);

  const [isEmpty, setIsEmpty] = useState(quantity === 0 ? true : false);

  const updateIsEmpty = (quantity) => {
    setIsEmpty(quantity === 0 ? true : false);
  };

  const updateQuantity = (quantity) => {
    setQuantity(quantity);
    updateIsEmpty(quantity);
  };

  return (
    <div className="container">
      <Header toggle={toggleSidebar} isEmpty={isEmpty} quantity={quantity} />
      <Sidebar sidebar={sidebar} toggle={toggleSidebar} />
      <Routes>
        <Route exact path="/" element={<Collections />} />
        <Route exact path="/men" element={<Men />} />
        <Route
          exact
          path="/women"
          element={
            <Women quantity={quantity} updateQuantity={updateQuantity} />
          }
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/image" element={<Image />}></Route>
      </Routes>
    </div>
  );
}

export default Page;
