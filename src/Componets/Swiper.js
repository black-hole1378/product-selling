import React, { Component } from "react";
import "./styles/Swiper.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
export default class Swiper extends Component {
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-image">
          <button
            className="prev-button"
            onClick={this.props.prevPic}
            type="button"
          >
            <ArrowBackIosIcon id="arrow-prev" />
          </button>

          <Link to="/big-image">
            <img src={this.props.selectedImage} id="selectedImage" alt="" />
          </Link>
          <button
            className="next-button"
            onClick={this.props.nextPic}
            type="button"
          >
            <ArrowForwardIosIcon id="arrow-next" />
          </button>
        </div>
        <div className="swiper-slides">{this.getAllSlideImages()}</div>
      </div>
    );
  }

  getAllSlideImages() {
    const images = this.props.images;
    console.log(images);
    const content = images.map((image, index) => (
      <div className="slider" key={index}>
        <img
          src={image.image}
          onClick={() => this.props.changePhoto(image.id)}
          id={image.selected ? "selected-image" : "image"}
          alt=""
        />
      </div>
    ));
    return content;
  }
}
