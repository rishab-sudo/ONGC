import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Features.css";

const Features = () => {
  const facilities = [
    {
      title: "Smart Classrooms",
      desc: "Digitally equipped classrooms with interactive learning tools that make lessons engaging and effective for every student.",
      icon: require("../assets/woman-standing-children-sitting-desks.jpg"),
    },
    {
      title: "Science & Computer Labs",
      desc: "Well-equipped laboratories that encourage hands-on learning in Physics, Chemistry, Biology, and Computer Science.",
      icon: require("../assets/innovative-futuristic-classroom-students.jpg"),
    },
    {
      title: "Sports & Physical Education",
      desc: "Spacious playgrounds and expert coaches promoting fitness, teamwork, and discipline through various indoor and outdoor sports.",
      icon: require("../assets/woman-standing-children-sitting-desks.jpg"),
    },
    {
      title: "Library & Reading Room",
      desc: "A peaceful and resourceful space with a vast collection of books, journals, and digital materials to enhance knowledge and curiosity.",
      icon: require("../assets/book-library-with-open-textbook.jpg"),
    },
  ];

  return (
    <Container fluid className="features-fluid">
      <Container className="features-container">
        {/* Left Image Section */}
        <motion.div
          className="feature-left-section"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={require("../assets/ongc-school-children.jpg")}
            alt="Campus View"
          />
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          className="feature-right-section"
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="features-heading-div" style={{ width: "100%", textAlign: "left" }}>
            <p className="special-heading">CAMPUS</p>
            <p className="page-heading dep-heading">World-Class Facilities for Every Student</p>
            <p className="page-text">
              ONGC School provides a safe, inspiring, and well-equipped learning environment where students
              grow intellectually, physically, and emotionally.
            </p>
          </div>

          {facilities.map((item, index) => (
            <div className="features-point-div" key={index}>
              <div className="feature-icon-div">
                <img className="facility-icons" src={item.icon} alt={item.title} />
              </div>
              <div className="feature-text-div">
                <p className="h2">{item.title}</p>
                <p className="h5">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </Container>
  );
};

export default Features;
