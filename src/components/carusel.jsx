import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Users from "./assets/boy.png";
import User2 from "./assets/girlboy.png";
import User3 from "./assets/badboyu.png";
import { Blue, Card, Card2, Container, Recent, User } from "./caruselstyle";

function Carusels() {
  const mock = [
    {
      id: 1,
      name: "Nurbek",
      paragraph:
        " I recently concluded a complete messaging revamp for an exciting com",
      img: Users,
    },
    {
      id: 2,
      name: "Nurbek",
      paragraph:
        " I recently concluded a complete messaging revamp for an exciting com",
      img: User3,
    },
    {
      id: 3,
      name: "Nurbek",
      paragraph:
        " I recently concluded a complete messaging revamp for an exciting com",
      img: User2,
    },
    {
      id: 4,
      name: "Nurbek",
      paragraph:
        " I recently concluded a complete messaging revamp for an exciting com",
      img: User3,
    },
  ];

  const [data, setData] = useState(mock);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "14px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#847d7d",
          borderRadius: "14px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Container>
        <h1> What Our Customers are Saying</h1>
        <Slider {...settings}>
          {data.map((value) => {
            return (
              <Card>
                <Card2>
                  <Blue></Blue>
                  <Recent>
                    <h4>{value.paragraph}</h4>
                    <h4>-- Leo Aminoff</h4>
                    <h4>Product Designer</h4>
                    <User src={value.img} />
                  </Recent>
                </Card2>
              </Card>
            );
          })}
        </Slider>
      </Container>
    </>
  );
}

export default Carusels;
