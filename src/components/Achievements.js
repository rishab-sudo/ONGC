import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Achievements.css";

const Achievements = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  };

  const data = [
    { img: require("../assets/Banner/student-programs4.jpg"), title: "Achievement One", text:"Short description about this achievement." },
    { img: require("../assets/Banner/student-programs4.jpg"), title: "Achievement Two", text:"Short description about this achievement." },
    { img: require("../assets/Banner/student-programs4.jpg"), title: "Achievement Three", text:"Short description about this achievement." },
    { img: require("../assets/Banner/student-programs4.jpg"), title: "Achievement Four", text:"Short description about this achievement." },
    { img: require("../assets/Banner/student-programs4.jpg"), title: "Achievement Five", text:"Short description about this achievement." }
  ];

  return (
    <Container fluid className="py-5 achievements">
      <h2 className="page-heading text-center mb-4">Our Achievements</h2>

      <Container>
        <Slider {...settings}>
          {data.map((item, i) => (
            <div key={i} className="achievement-card">
              <img src={item.img} alt="achievement" />
              <div className="overlay">
                <div className="overlay-content">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </Container>
  );
};

export default Achievements;
