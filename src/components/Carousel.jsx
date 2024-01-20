import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Carousel.css"; // Create a CSS file for styling
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const slides = [
    {
      imgSrc:
        "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/ezgif-sixteen_nine_74.jpg?size=948:533",
      title: "#HeatwaveReady",
      subtitle:
        "Being #Heatwave Ready means understanding HeatWave risk and taking steps now to prepare.",
    },
    {
      imgSrc:
        "https://www.kalpataruindia.in/blog/wp-content/uploads/2020/04/numaish.jpg",
      title: "#FireProof",
      subtitle:
        "Being #FireProof means understanding Safety Tips and taking steps now to prevent fire",
    },
  ];

  return (
    <Slider {...carouselSettings}>
      {slides.map((slide, index) => (
        <div key={index} className="carousel-slide">
          <img
            src={slide.imgSrc}
            alt={`Slide ${index + 1}`}
            className="carousal-img"
          />
          <div className="grey-box rounded-2xl shadow-2xl">
            <h2 className="tracking-wider font-bold text-2xl border-b border-white w-fit mb-2 pr-1">
              {slide.title}
            </h2>
            <p>{slide.subtitle}</p>
            <button
              className="mt-4 text-[rgb(30,67,86)] hover:bg-[rgb(30,67,86)] hover:border hover:border-gray-200 hover:text-white hover:shadow-lg focus:outline-none focus:ring"
              onClick={() => navigate("/plan")}
            >
              Make Plan
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
