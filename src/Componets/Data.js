import selectedImage from "./images/image-product-1.jpg";
import image1 from "./images/image-product-2.jpg";
import image2 from "./images/image-product-3.jpg";
import image3 from "./images/image-product-4.jpg";
const getAllImages = () => {
  const images = [
    {
      id: 0,
      selected: true,
      image: selectedImage,
    },
    {
      id: 1,
      selected: false,
      image: image1,
    },
    {
      id: 2,
      selected: false,
      image: image2,
    },
    {
      id: 3,
      selected: false,
      image: image3,
    },
  ];
  return images;
};

export class Product {
  constructor(name, heading, tittle, price, discount, CrossPrice) {
    this.name = name;
    this.heading = heading;
    this.tittle = tittle;
    this.price = price;
    this.discount = discount;
    this.CrossPrice = CrossPrice;
  }
}

export default getAllImages;
