import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./Separate.css";

const Separate = () => {
  const departments = [
    { id: 1, title: "Economics", img: require("../assets/campur_life_1.jpg") },
    { id: 2, title: "Mathematics", img: require("../assets/campur_life_1.jpg") },
    { id: 3, title: "Computer Science", img: require("../assets/campur_life_1.jpg") },
    { id: 4, title: "Psychology", img: require("../assets/campur_life_1.jpg") },
    { id: 5, title: "Biology", img: require("../assets/campur_life_1.jpg") },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992, // tablets
        settings: { slidesToShow: 2 },
      },
        {
        breakpoint: 768, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Container fluid className="sep-fluid">
      <Container className="sep-container">
        <div>
          <p className="special-heading">Departments</p>
          <p className="page-heading">Popular Departments</p>
          <p>
            Far far away, behind the word mountains, far from the Consonantia,
            there live the blind texts. Separated they mark grove right at the coast.
          </p>
        </div>

        <div className="bottom-sec-div">
          <Slider {...settings}>
            {departments.map((dept) => (
              <div key={dept.id} className="icon-text-div">
                <div className="card-div">
                  <div className="sep-icon-div">
                    <img src={dept.img} alt={dept.title} />
                  </div>
                  <div className="sep-card-text">
                    <p>{dept.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </Container>
  );
};

export default Separate;
