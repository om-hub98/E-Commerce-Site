/** @format */

import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CarouselData } from "../data/HomeData";

const Carousel = () => {
//   cosnt[(carouselData, setCarouselData)] = useState([]);

//   useEffect(() => {
//     setCarouselData(CarouselData);
//   }, []);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <img src="D:\Git Repo\e-commerce\src\assets\images\black-friday-elements-assortment.jpg"  role="presentation" />,
    <img src="D:\Git Repo\e-commerce\src\assets\images\full-shot-woman-online-shopping.jpg"  role="presentation" />,
    <img src="D:\Git Repo\e-commerce\src\assets\images\online-fashion-shopping-collage.jpg"  role="presentation" />,
    <img src="D:\Git Repo\e-commerce\src\assets\images\photo-1583743814966-8936f5b7be1a.avif"  role="presentation" />,
    <img src="D:\Git Repo\e-commerce\src\assets\images\photo-1620799140408-edc6dcb6d633.avif"  role="presentation" />,
    <img src="D:\Git Repo\e-commerce\src\assets\images\photo-1620799140408-edc6dcb6d633.avif"  role="presentation" />,
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
};
export default Carousel;
