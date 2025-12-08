import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Process.css";

const Process = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  return (
    <>

      {/* ========== SECTION 1 ========== */}
      <div className="process-container process1">

        <div className="overlay"></div>

        <Container className="center-content">
          <h1>Who We Are</h1>

          <p>
            ONGC Community School is a progressive educational institution committed 
            to providing quality education, holistic development, and value-based learning.
          </p>
          <p>
            We strive to empower every child with academic excellence, life skills, 
            discipline, and confidence to excel in a dynamic world.
          </p>

          {showMore1 && (
            <p className="more-text">
              It identifies talent at a young age and transforms it into future-ready 
              leaders through holistic learning, exposure and mentorship.
            </p>
          )}

          <button className={`read-more-btn ${showMore1 ? "active" : ""}`} 
            onClick={() => setShowMore1(!showMore1)}>
            {showMore1 ? "Read Less" : "Read More"}
            {showMore1 ? <IoIosArrowUp size={18}/> : <IoIosArrowDown size={18}/> }
          </button>
        </Container>
      </div>



      {/* ========== SECTION 2 ========== */}
      <div className="process-container process2">

        <div className="overlay"></div>

        <Container className="center-content">
          <h1>What We Do</h1>

          <p>
            VidyaGyan offers a world-class residential model that nurtures excellence
            through academic rigour, exposure-based learning and character development.
          </p>

          {showMore2 && (
            <p className="more-text">
              Students are empowered with leadership skills, innovation mindset,
              emotional intelligence & real-world learning.
            </p>
          )}

          <button className={`read-more-btn ${showMore2 ? "active" : ""}`} 
            onClick={() => setShowMore2(!showMore2)}>
            {showMore2 ? "Read Less" : "Read More"}
            {showMore2 ? <IoIosArrowUp size={18}/> : <IoIosArrowDown size={18}/> }
          </button>
        </Container>
      </div>

    </>
  );
}

export default Process;
