import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "./Campus.css";

const topImages = [
  { img: require("../assets/campus/campus3.jpeg"), city: "" },
  { img: require("../assets/campus/campus2.jpeg"), city: "" },
  { img: require("../assets/campus/campus1.jpeg"), city: "" },
];

const CampusSection = () => {
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
            <span style={{ fontWeight: 600 }}>ONGC</span> CS epitomises vibrancy and freshness,
            dovetailing much of the ethos of the new post-independence India into its educational
            program and philosophy.
          </p>
        </motion.div>

        {/* 🔥 Swiper Slider */}
        <motion.div
          className="campus-slider"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2200, disableOnInteraction: false }}
            speed={700}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {topImages.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="campus-card top-card">
                  <img src={item.img} alt={item.city} />
                  <div className="campus-overlay"></div>

                  <div className="campus-card-info">
                    <span className="city-name">{item.city}</span>
                    <div className="arrow-circle">
                      <a href="/gallery">
                        <span className="arrow">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
};

export default CampusSection;
