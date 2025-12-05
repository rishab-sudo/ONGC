import React from "react";
import { motion } from "framer-motion";   // ⭐ IMPORT HERE
import "./Welcome.css";

const Welcome = () => {
  const sideImg = require("../assets/Banner/ongc-bn-1.jpg");

  return (
    <section className="welcome-section">
      <div className="welcome-container">

        {/* LEFT SECTION - Slide from Left */}
        <motion.div 
          className="left-content"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>Welcome to <br /> NPS Super 4</h1>
          <p>
            The Super 4 comprises of NPS Whitefield, East, Marathahalli, and Silk
            Board. We blend advanced pedagogy with real-world readiness, and equip
            students to think boldly, act confidently, and thrive in a changing
            world.
          </p>
        </motion.div>

        {/* RIGHT SECTION - Slide from Right */}
        <motion.div 
          className="right-slider"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="card main-card">
            <img src={require("../assets/Banner/ongc-feature_img.jpg")} alt="NPS Whitefield" />
            <div className="card-text">
              <h3>NPS Whitefield</h3>
              <ul>
                <li>Pre-Primary</li>
                <li>Primary</li>
                <li>Higher Secondary</li>
              </ul>
              <button>Learn More</button>
            </div>
          </div>

          <div className="side-cards">
            <div className="card small-card" style={{ backgroundImage: `url(${sideImg})` }}>
              NPS East
            </div>

            <div className="card small-card" style={{ backgroundImage: `url(${sideImg})` }}>
              NPS Marathahalli
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Welcome;
