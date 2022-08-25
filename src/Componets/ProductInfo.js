import React from "react";
function ProductInfo({
  product: { name, heading, tittle, price, discount, CrossPrice },
}) {
  return (
    <React.Fragment>
      <p className="product-name">{name}</p>
      <h1 className="product-heading">{heading}</h1>
      <p className="product-tittle">{tittle}</p>
      <div className="money-container">
        <p id="real-price">${price}</p>
        <p id="discount">{discount}%</p>
      </div>
      <p className="cross-price">${CrossPrice}</p>
    </React.Fragment>
  );
}

export default ProductInfo;
