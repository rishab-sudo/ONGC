import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./Trustees.css";

const trustData = [
  {
    img: require("../assets/roshni-nadar-malhotra.jpg"),
    title: "Leadership & Vision",
    text: "Our trustees bring decades of leadership shaping the future of education.",
  },
  {
    img: require("../assets/Banner/student-programs4.jpg"),
    title: "Commitment to Excellence",
    text: "We focus on quality education and holistic growth of students.",
  },
  {
    img: require("../assets/roshni-nadar-malhotra.jpg"),
    title: "Strong Foundation",
    text: "Guiding values and mission ensure the best environment for learners.",
  },
];

const Trustees = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % trustData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const item = trustData[index];

  return (
    <section className="trust">
      <div className="d-flex flex-column justify-content-center align-item-center text-center mb-5">
        <p className='page-heading'>Our Trustees</p>
        <p className="page-text" style={{ marginTop:"-12px" }}>
          ONGC is led by our distinguished Trustees, guiding and strategizing 
          to ensure continuous excellence in education.
        </p>
      </div>

      <Container>
        <div className="trust-slider-wrapper">

          {/* SMALL SMOOTH FADE + LIGHT SLIDE */}
          <AnimatePresence mode="wait">

            <motion.div
              key={item.img}
              className="trust-image"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img src={item.img} alt={item.title} />
            </motion.div>

          </AnimatePresence>

          <AnimatePresence mode="wait">

            <motion.div
              key={item.title}
              className="trust-text"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </motion.div>

          </AnimatePresence>

        </div>
      </Container>
    </section>
  );
};

export default Trustees;
