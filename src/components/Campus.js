import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";   // ⭐ ADD THIS
import "./Campus.css";

const topImages = [
  { img: require("../assets/Banner/demo-img1.jpg"), city: "Delhi" },
  { img: require("../assets/Banner/demo-img1.jpg"), city: "Mumbai" },
  { img: require("../assets/Banner/demo-img1.jpg"), city: "Bangalore" },
];

const bottomImages = [
  {
    img: require("../assets/Banner/student-programs4.jpg"),
    title: "Delhi Campus",
    desc: "A beautiful environment with modern facilities.",
  },
  {
    img: require("../assets/Banner/student-programs4.jpg"),
    title: "Mumbai Campus",
    desc: "The heart of education and culture.",
  },
  {
    img: require("../assets/Banner/student-programs4.jpg"),
    title: "Bangalore Campus",
    desc: "Technology hub with world-class amenities.",
  },
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
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="campus">
      <div className="campus-container">

        {/* 🔥 HEADING — SLIDE FROM LEFT */}
        <motion.div
          className="campus-left"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="campus-heading">Our Campus</h2>
          <p className="campus-subheading">
            Explore our world-class campuses across major cities.
          </p>
        </motion.div>

        {/* 🔥 SLIDER — SLIDE FROM RIGHT */}
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
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* 🔥 SECOND HEADING — SLIDE FROM LEFT */}
        <motion.div
          className="campus-left mt-5"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="campus-heading">Campus Facilities</h2>
          <p className="campus-subheading">
            Explore our world-class campuses across major cities.
          </p>
        </motion.div>

        {/* 🔥 SECOND SLIDER — FROM RIGHT */}
        <motion.div
          className="campus-slider second"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {bottomImages.map((item, index) => (
              <div className="campus-card second-card" key={index}>
                <img src={item.img} alt={item.title} />
                <div className="campus-overlay"></div>

                <div className="second-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
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
