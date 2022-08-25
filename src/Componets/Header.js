import React, { useState } from "react";
import "./styles/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import NavBar from "./NavBar";
import myImage from "./images/image-avatar.png";
import { Link } from "@mui/material";
import Dropdown from "./Dropdown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Notification from "./Notification";
import productImage from "./images/image-product-1-thumbnail.jpg";
export default function Header({ toggle, quantity, isEmpty }) {
  const [notification, setNotificatin] = useState(true);
  const [cart, setCart] = useState(false);
  const toggleCart = () => {
    setCart((prev) => !prev);
  };

  const product = new Cart(cart, isEmpty, quantity, productImage);

  return (
    <section className="header-container">
      <div className="left-header">
        <Link to="#" className="link" onClick={toggle}>
          <MenuIcon className="link-button" />
        </Link>
        <a className="logo">sneakers</a>
        <NavBar />
      </div>
      <div className="right-container">
        <div className="basket-container">
          <button type="button" className="cart-button" onClick={toggleCart}>
            <ShoppingCartIcon />
          </button>
          <Dropdown product={product} />
          <Notification notification={notification} quantity={quantity} />
        </div>
        <a href="#" className="profile">
          <img src={myImage} alt=""></img>
        </a>
      </div>
    </section>
  );
}

class Cart {
  constructor(cart, isEmpty, quantity, productImage) {
    this.cart = cart;
    this.isEmpty = isEmpty;
    this.quantity = quantity;
    this.productImage = productImage;
  }
}
