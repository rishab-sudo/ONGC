import React from "react";
import { motion } from "framer-motion";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">

        {/* LEFT TEXT */}
        <motion.div 
          className="left-content"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="welcome-heading-div">
          <h1 className="page-heading welcome-heading">
            Welcome to <br /> ONGC Community School
          </h1>
          </div>

          <p className="page-text">
            A place where education meets excellence. We are committed to nurturing
            young minds through quality learning and holistic development. <br/><br/>
            Our dedicated faculty, modern facilities, and student-centric environment
            ensure meaningful growth. At ONGC Community School, every child is
            empowered to explore, achieve, and succeed. <br/><br/>
            <span style={{fontWeight:"600"}}>
              Join us as we inspire future leaders with values, knowledge, and innovation.
            </span>
          </p>
        </motion.div>

        {/* RIGHT IMAGE CARD */}
        <motion.div 
          className="right-single-card"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="main-card">
            <img src={require("../assets/Banner/new-ongc-banner2.jpg")} alt="ONGC" />
          
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Welcome;
