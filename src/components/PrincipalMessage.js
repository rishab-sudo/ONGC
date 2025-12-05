import React, { useState } from "react";
import { motion } from "framer-motion";  // ⭐ Import Framer Motion
import "./PrincipalMessage.css";

const PrincipalMessage = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMessage = () => setExpanded(!expanded);

  return (
    <section className="principal-message py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT TEXT — SLIDE FROM LEFT */}
          <motion.div 
            className="col-md-6 message-content-div"
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="mb-4 page-heading principal-heading">Principal&apos;s Message</h2>

            <p className="page-text">
              Welcome to ONGC Community School, a vibrant learning community where 
              every child is valued and inspired. Our dedicated educators nurture curiosity, 
              creativity, and character through holistic education. We strive to create 
              a safe, inclusive, and supportive environment that empowers students to 
              learn with purpose and truly “Make Tomorrow Brighter.”
            </p>

            {expanded && (
              <motion.p 
                className="extra-text page-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                At ONGC School, we nurture not only academic growth but also confidence,
                character, and compassion. With the support of our parents and teachers, 
                we provide a caring, inclusive environment where every child is encouraged 
                to learn, grow, and succeed.
              </motion.p>
            )}

            <button className="view-btn mt-3" onClick={toggleMessage}>
              {expanded ? "View Less" : "View More"}
            </button>
          </motion.div>

          {/* RIGHT VIDEO — SLIDE FROM RIGHT */}
          <motion.div 
            className="col-md-6 text-center mt-4 mt-md-0"
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <video 
              className="principal-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={require("../assets/video/videoplayback (1).mp4")} type="video/mp4" />
            </video>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
