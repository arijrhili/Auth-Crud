"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/img/hero.1.jpg",
      title: "La Santé En Questions",
      mainTitle: "Pourquoi DOCTEUR",
    },

    {
      id: 2,
      img: "/img/hero2.jpg",
      title: "Healthcare You Trust",
      mainTitle: "WE CARE ABOUT YOUR HEALTH",
    },
  ];

  return (
    <div>
      <div >
      <Slider {...settings}>
  {slideData.map((item) => (
    <Slide
      key={item.id}
      img={item.img}
      title={item.title}
      mainTitle={item.mainTitle}
    />
  ))}
</Slider>

      </div>
    </div>
  );
};

export default Hero;
