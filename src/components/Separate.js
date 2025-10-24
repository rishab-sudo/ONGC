import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./Separate.css";

const Separate = () => {
  const departments = [
    {
      id: 1,
      title: "Science Department",
      desc: "Offering Physics, Chemistry, Biology, and Mathematics  nurturing future engineers, doctors, and researchers.",
      img: require("../assets/campur_life_1.jpg"),
    },
    {
      id: 2,
      title: "Commerce Department",
      desc: "Focused on Accountancy, Business Studies, and Economics preparing students for finance careers.",
      img: require("../assets/campur_life_1.jpg"),
    },
    {
      id: 3,
      title: "Humanities Department",
      desc: "Encouraging creativity and critical thinking through subjects like History, Political Science, and Psychology.",
      img: require("../assets/campur_life_1.jpg"),
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Container fluid className="sep-fluid">
      <Container className="sep-container">
        <div>
          <p className="special-heading">Departments</p>
          <p className="page-heading">Our Academic Streams</p>
          <p>
            ONGC School offers diverse academic departments under the CBSE curriculum,
            helping students choose paths that align with their interests and future aspirations.
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
                    <h5>{dept.title}</h5>
                    <p>{dept.desc}</p>
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
