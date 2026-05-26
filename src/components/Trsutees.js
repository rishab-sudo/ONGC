import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./Trustees.css";

const trustData = [
  {
    img: require("../assets/trustees/trust1 (1).jpeg"),
    title: "Leadership & Vision",
    text: `Our trustees bring decades of leadership 
shaping the future of education. 
They inspire innovation, integrity, 
and excellence in every initiative.`,
  },
  {
    img: require("../assets/trustees/trust2 (1).jpeg"),
    title: "Commitment to Excellence",
    text: `We focus on quality education 
and holistic growth of students. 
Our mission is to nurture talent, 
confidence, and lifelong learning.`,
  },
  {
    img: require("../assets/trustees/trust3 (1).jpeg"),
    title: "Strong Foundation",
    text: `Guiding values and mission ensure 
the best environment for learners. 
We build character, discipline, 
and academic strength for success.`,
  },
  {
    img: require("../assets/trustees/trusty4.jpeg"),
title: "Empowering Young Minds",
    text: `Every decision is focused on 
student growth and well-being. 
We encourage creativity, leadership, 
and meaningful learning experiences.`,
  },
  {
   img: require("../assets/trustees/trust5.jpeg"),
    title: "Community & Values",
    text: `Our institution promotes unity, 
respect, and social responsibility. 
Together we create a supportive 
and inspiring educational community.`,
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
        <p className='page-heading trust-heading'>Our Management</p>
        <p className="page-text" style={{ marginTop:"-12px" }}>
          ONGC Foundation is led by our distinguished Trustees, guiding and strategizing 
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
