import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "./Campus.css";

const topImages = [
  { img: require("../assets/campus/campus3.jpeg"), city: "" },
  { img: require("../assets/campus/campus2.jpeg"), city: "" },
  { img: require("../assets/campus/campus1.jpeg"), city: "" },
];

const CampusSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2200,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="campus">
      <div className="campus-container">

        {/* 🔥 Heading */}
        <motion.div
          className="campus-left"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="campus-heading page-heading">Our Campus</h2>
          <p className="campus-subheading page-text">
            <span style={{ fontWeight: 600 }}>ONGC</span> CS epitomises vibrancy and freshness, dovetailing much of the ethos of the new post-independence India into its educational program and philosophy. The school is a secular co-educational one integrating into its curriculum concern for the environment, the spirit of community service and international peace and brotherhood.
Besides spacious classrooms and playgrounds, we have fully developed facilities for each department, with Maths and Science laboratories, a Computer Resource Center, well stocked libraries, an auditorium and open-air stage, and a Teachers’ Learning Center.
       </p>
        </motion.div>

        {/* 🔥 Single Slider (only one kept) */}
        <motion.div
          className="campus-slider"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {topImages.map((item, index) => (
              <div className="campus-card top-card" key={index}>
                <img src={item.img} alt={item.city} />
                <div className="campus-overlay"></div>

                <div className="campus-card-info">
                  <span className="city-name">{item.city}</span>
                  <div className="arrow-circle">
                   <a href="/gallery"> <span className="arrow">→</span></a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

      </div>
    </section>
  );
};

export default CampusSection;
