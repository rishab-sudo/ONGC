import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Achievements.css";

const Achievements = () => {
  const data = [
    {
      img: require("../assets/campus/achv.jpeg"),
      title: "Proven Excellence",
      text: "Consistent district toppers and outstanding CBSE results",
    },
    {
      img: require("../assets/campus/achv22.jpeg"),
      title: "Consistent Achievements",
      text: "Students placed in leading schools and institutions",
    },
    {
      img: require("../assets/campus/achv2.jpg"),
      title: "Winning Legacy",
      text: "Winners in District-level sports events",
    },
    {
      img: require("../assets/campus/achv3.jpg"),
      title: "Student Success",
      text: "Multiple medals and recognitions in National Olympiads",
    },
    {
      img: require("../assets/campus/achv4.jpg"),
      title: "Glorious Milestones",
      text: "Awards in cultural, art, debate, and science fairs",
    },
      {
      img: require("../assets/campus/achv2.jpg"),
      title: "Winning Legacy",
      text: "Winners in District-level sports events",
    },

  ];

  return (
    <Container fluid className="py-5 achievements">
      <h2 className="page-heading achv-heading text-center mb-4">
        Our Achievements
      </h2>

      <Container>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={600}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            992: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="achievement-card">
                <img
                  src={item.img}
                  alt="achievement"
                  className="achv-img"
                />

                <div className="overlay">
                  <div className="overlay-content">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Container>
  );
};

export default Achievements;
