import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import "./Separate.css";

const Separate = () => {
  const departments = [
    {
      id: 1,
      title: "Science Department",
      desc: "Exploring innovation through Physics, Chemistry, Biology, and Mathematics shaping future scientists, engineers, and innovators.",
      img: require("../assets/ongc-dep-1.avif"),
    },
    {
      id: 2,
      title: "Commerce Department",
      desc: "Building business acumen with Accountancy, Business Studies, and Economics, preparing tomorrow’s entrepreneurs and financial leaders.",
      img: require("../assets/ongc-dep-2.jpg"),
    },
    {
      id: 3,
      title: "Humanities Department",
      desc: "Fostering creativity, empathy, and analytical thinking through History, Political Science, Psychology, and more.",
      img: require("../assets/ongc-dep-3.jpeg"),
    },
  ];

  return (
    <Container fluid className="sep-fluid">
      <Container className="sep-container">
        <div>
          <p className="special-heading">Departments</p>
          <h1 className="page-heading">Our Academic Streams</h1>
          <p>
            ONGC School offers diverse academic departments under the CBSE curriculum,
            helping students choose paths that align with their interests and future aspirations.
          </p>
        </div>

        <div className="bottom-sec-div">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={25}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            className="sep-swiper"
          >
            {departments.map((dept) => (
              <SwiperSlide key={dept.id}>
                <div className="sep-card-div">
                  <div className="sep-icon-div">
                    <img src={dept.img} alt={dept.title} />
                  </div>
                  <div className="sep-card-text">
                    <h5>{dept.title}</h5>
                    <p>{dept.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Container>
  );
};

export default Separate;
