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
<span style={{fontWeight:600}}>Dear Students, Parents, and Well-wishers,</span><br/>
<span style={{fontWeight:600}}>At ONGC Community School,</span> we believe that education is a journey of discovery of knowledge, values, and identity. Our mission is to provide an environment where every child feels inspired, supported, and encouraged to dream fearlessly...<br/>

            </p>

            {expanded && (
              <motion.p 
                className="extra-text page-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
  We nurture learners not only to excel academically but to grow as compassionate, confident, and responsible individuals. With a dedicated team of educators, modern infrastructure, and a child-centric approach, we strive to create a learning experience that is meaningful, joyful, and transformative.<br/>
Together, let us build a future where our children shine with curiosity, creativity, and courage.<br/>
<span style={{fontWeight:600}}>– Principal, ONGC Community School</span>
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
