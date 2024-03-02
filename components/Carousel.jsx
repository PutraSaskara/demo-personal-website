"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard2 from './SkillCard2';
import './Carousel.css'; // Import your CSS file for custom styles

const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      }
    ]
  };


  return (
    <div className="carousel-container ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide pl-7">
            <SkillCard2 img={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
