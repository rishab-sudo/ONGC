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
    { img: require("../assets/Banner/student-programs4.jpg"), title: "Achievement One", text:"Consistent district toppers and outstanding CBSE results" },
    { img: require("../assets/Banner/student-programs4.jpg"), title: "Achievement Two", text:"Students placed in leading schools and institutions" },
    { img: require("../assets/Banner/student-programs4.jpg"), title: "Achievement Three", text:"Winners in  District-level sports events" },
    { img: require("../assets/Banner/student-programs4.jpg"), title: "Achievement Four", text:"Multiple medals and recognitions in National Olympiads" },
    { img: require("../assets/Banner/student-programs4.jpg"), title: "Achievement Five", text:"Excellence awards in cultural activities, art, debate, and science fairs" },
        { img: require("../assets/Banner/student-programs4.jpg"), title: "Achievement Five", text:"Recognition for quality education and community engagement at various platforms" }
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
