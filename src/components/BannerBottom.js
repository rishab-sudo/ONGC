import React from "react";
import { motion } from "framer-motion";
import "./BannerBottom.css";

const BannerBottom = () => {
  const cardData = [
    {
      title: "Admissions",
      text: "Our admission process has been developed to be thorough and concise.",
    },
    {
      title: "Alumni",
      text: "VidyaGyan Alumni have found success within India and Internationally.",
    },
    {
      title: "Achievements",
      text: "Our students surpass themselves year after year in standardized testing.",
    },
  ];

  return (
    <motion.div
      className="banner-bottom-container"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {cardData.map((item, index) => (
        <div className="bb-card" key={index}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <button className="bb-btn">→</button>
        </div>
      ))}
    </motion.div>
  );
};

export default BannerBottom;
