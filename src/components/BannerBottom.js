import React from "react";
import { motion } from "framer-motion";
import "./BannerBottom.css";

const BannerBottom = () => {
  const cardData = [
    {
      title: "ADMISSION",
      text: "Our admission process has been developed to be thorough and concise.",
      img: "bg1.jpg", // <-- replace with your image
    },
    {
      title: "ALUMNI",
      text: "VidyaGyan Alumni have found success within India and Internationally.",
      img: "bg2.jpg", // <-- replace with your image
    },
    {
      title: "ACHIEVEMENTS",
      text: "Our students surpass themselves year after year in standardized testing.",
      img: "bg3.jpg", // <-- replace with your image
    },
  ];

  return (
    <motion.div
      className="banner-bottom-wrapper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {cardData.map((item, index) => (
        <div
          className="bb-card"
          key={index}
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="bb-overlay">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <button className="bb-btn">
              See Now ➜
            </button>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default BannerBottom;
