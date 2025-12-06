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
          <h1 className="page-heading welcome-heading">Welcome to <br /> ONGC Community School</h1>
          <p className="page-text">
        A place where education meets excellence.
We are committed to nurturing young minds through quality learning and holistic development.<br/>
Our dedicated faculty, modern facilities, and student-centric environment ensure meaningful growth.
At ONGC Community School, every child is empowered to explore, achieve, and succeed.<br/>
<span style={{fontWeight:"600"}}>Join us as we inspire future leaders with values, knowledge, and innovation.</span>
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
