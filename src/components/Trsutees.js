import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Trustees.css";

const trustData = [
  {
    img: require("../assets/roshni-nadar-malhotra.jpg"),
    title: "Leadership & Vision",
    text: "Our trustees bring decades of leadership shaping the future of education.",
  },
  {
    img: require("../assets/roshni-nadar-malhotra.jpg"),
    title: "Commitment to Excellence",
    text: "We focus on quality education and holistic growth of students.",
  },
  {
   img: require("../assets/roshni-nadar-malhotra.jpg"),
    title: "Strong Foundation",
    text: "Guiding values and mission ensure the best environment for learners.",
  },
];

const Trsutees = () => {
  return (
    <section className="trust">
         <div className="d-flex flex-column justify-content-center align-item-center text-center mb-5">
            <p className='page-heading'>Our Trsutees</p>
            <p className="page-text" style={{marginTop:"-12px"}}>ONGC is led by our distinguished Trustees, <br/> guiding and strategizing to ensure that the school continues its    
pathbreaking journey in education.</p>
          </div>
      <Container>

        {trustData.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              className={`trust-row ${isReverse ? "reverse" : ""}`}
              key={index}
            >

              {/* IMAGE */}
              <motion.div
                className="trust-image"
                initial={{ x: isReverse ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img src={item.img} alt={item.title} />
              </motion.div>

              {/* TEXT */}
              <motion.div
                className="trust-text"
                initial={{ x: isReverse ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </motion.div>

            </div>
          );
        })}

      </Container>
    </section>
  );
};

export default Trsutees;
