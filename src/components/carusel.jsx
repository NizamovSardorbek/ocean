import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CaruselDiv } from "./caruselstyle";

function Corusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1>single item</h1>
      <CaruselDiv>
        <Slider {...settings}>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>22</h3>
          </div>
          <div>
            <h3>33</h3>
          </div>
          <div>
            <h3>44</h3>
          </div>
        </Slider>
      </CaruselDiv>
    </div>
  );
}

export default Corusel;
