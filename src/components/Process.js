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
          <h1 className="page-heading process-heading">Who We Are</h1>

          <p className="page-text">
Making Tomorrow Brighter” is the guiding motto of ONGC Community School — a pioneering institution and the first of its kind in India. Established by ONGC in collaboration with the SDMC Trust as its COM Partner, the school represents a visionary step toward redefining quality education. Inspired by sensitivity, compassion, and a deep understanding of every child’s unique potential, our institution is thoughtfully crafted to reflect the character of its location while meeting the evolving educational needs of our times.
Affiliated with the Central Board of Secondary Education (CBSE), 
          </p>
       
          {showMore1 && (
            <p className="more-text page-text">
             ONGC Community School is dedicated to nurturing young minds through academic excellence, holistic development, and an unwavering commitment to high-quality learning. Here, we aspire not only to educate—but to illuminate a brighter future for every learner.
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
          <h1  className="page-heading process-heading">What We Do</h1>

          <p className="page-text">
           We empower students through a blend of academics, co-curricular activities, sports, and value-based learning.
            Our mission is to nurture each child’s potential, build strong character, and prepare them for future success in a rapidly changing world.
          </p>

          {showMore2 && (
            <p className="more-text page-text">
        
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
