import React from "react";
import "./styles/Dropdown.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button } from "react-bootstrap";
function Dropdown({ product: { cart, isEmpty, quantity, productImage } }) {
  let content;
  if (isEmpty) {
    content = <p id="box-content">Your cart is empty.</p>;
  } else {
    content = (
      <div className="box-container">
        <div className="bye-container">
          <div id="left">
            <img src={productImage} alt="" />
            <span id="content-container">
              <p id="product-name">Fall Limited Edition Sneakers</p>
              <p id="product-cost">125x{quantity} $175</p>
            </span>
          </div>
          <div id="rigth">
            <DeleteOutlineIcon className="delete-icon" />
          </div>
        </div>
        <Button type="button" id="checkout-button">
          Checkout
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className={cart ? "cart cart--active" : "cart"}>
        <p id="content">Cart</p>
        {content}
      </div>
    </>
  );
}

export default Dropdown;
