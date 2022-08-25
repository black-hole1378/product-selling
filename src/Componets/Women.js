import React, { Component } from "react";
import Swiper from "./Swiper";
import "./styles/style.css";
import selectedImage from "./images/image-product-1.jpg";
import getAllImages, { Product } from "./Data";
import ProductInfo from "./ProductInfo";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
export default class Women extends Component {
  constructor(props) {
    super(props);
    this.product = this.getProduct();
    this.state = {
      selectedImage: selectedImage,
      imagesItem: getAllImages(),
      quantity: this.props.quantity,
    };
  }

  render() {
    return (
      <section className="body-container row">
        <div className="col-md-6">
          <Swiper
            selectedImage={this.state.selectedImage}
            images={this.state.imagesItem}
            changePhoto={this.changePhoto}
            prevPic={this.prevPic}
            nextPic={this.nextPic}
          />
        </div>
        <div className="col-md-6 right-body">
          <ProductInfo product={this.product} />
          <div className="input-container">
            <div className="flex-box">
              <button
                type="button"
                id="minus-button"
                onClick={() => this.updateQuantity("-")}
              >
                -
              </button>
              <p id="quantity">{this.state.quantity}</p>
              <button
                type="button"
                id="plus-button"
                onClick={() => this.updateQuantity("+")}
              >
                +
              </button>
            </div>
            <button
              className="btn btn-success"
              type="button"
              onClick={() => this.props.updateQuantity(this.state.quantity)}
            >
              {<ShoppingCart />} Add to cart
            </button>
          </div>
        </div>
      </section>
    );
  }

  changePhoto = (id) => {
    const { imagesItem } = this.state;
    console.log(id);
    const image = imagesItem.find((x) => x.id === id);
    const prevImage = imagesItem.find((x) => x.selected === true);
    prevImage.selected = false;
    image.selected = true;
    this.setState({
      selectedImage: image.image,
    });
  };

  nextPic = () => {
    const { imagesItem } = this.state;
    let selectedId = imagesItem.find((x) => x.selected === true);
    if (selectedId.id < imagesItem.length) this.changePhoto(selectedId.id + 1);
  };

  prevPic = () => {
    console.log("hello");
    const { imagesItem } = this.state;
    let selectedId = imagesItem.find((x) => x.selected === true);
    if (selectedId.id > 0) this.changePhoto(selectedId.id - 1);
  };

  getProduct() {
    return new Product(
      "Sneaker Company",
      "Fall Limited Edition Sneakers",
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,they’ll withstand everything the weather can offer.",
      125.0,
      50,
      250.0
    );
  }

  updateQuantity = (choice) => {
    if (choice === "+")
      this.setState({
        quantity: this.state.quantity + 1,
      });
    else {
      if (this.state.quantity > 0)
        this.setState({
          quantity: this.state.quantity - 1,
        });
    }
  };
}
