import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; 
import "./Process.css";

const Process = () => {
  const [showMore1, setShowMore1] = useState(false); // Section 1 toggle
  const [showMore2, setShowMore2] = useState(false); // Section 2 toggle

  return (
    <>
      {/* ====================== SECTION 1 ====================== */}
      <div className="process-container"
        style={{ backgroundImage: `url(${require('../assets/Banner/ongc-feature_img.jpg')})` }}>

        <div className="overlay"></div>

        <div className="content">
          <h1>Who We Are</h1>
          <p>
            VidyaGyan bridges a significant gap in India's education landscape.
            Amidst institutions nurturing urban elite potential, VidyaGyan stands
            out by focusing on high-achieving students from rural communities.
          </p>

          {/* SHOW HIDDEN TEXT */}
          {showMore1 && (
            <p className="more-text">
              It identifies talent at a young age and transforms their potential
              into future-ready leaders through holistic learning, exposure, 
              mentorship, values & global opportunities.
            </p>
          )}

          {/* BUTTON BELOW EXPANDED TEXT */}
          <button 
            className={`read-more-btn ${showMore1 ? "active" : ""}`} 
            onClick={() => setShowMore1(!showMore1)}
          >
            {showMore1 ? "Read Less" : "Read More"}
            {showMore1 
              ? <IoIosArrowUp className="react-icon-arrow" size={18} /> 
              : <IoIosArrowDown className="react-icon-arrow" size={18} />
            }
          </button>
        </div>
      </div>

      {/* ====================== SECTION 2 ====================== */}
      <div className="process-container"
        style={{ backgroundImage: `url(${require('../assets/Banner/ongc-feature_img.jpg')})` }}>

        <div className="overlay"></div>

        <div className="content-2">
          <h1>What We Do</h1>
          <p>
            VidyaGyan offers a world-class residential model that nurtures 
            excellence through academic rigour, exposure-based learning and 
            character development.
          </p>

          {/* INDIVIDUAL SHOW MORE CONTENT */}
          {showMore2 && (
            <p className="more-text">
              Students are empowered with leadership skills, innovation mindset, 
              emotional intelligence & real-world learning beyond classrooms.
            </p>
          )}

          {/* SECOND READ BUTTON WORKS INDEPENDENTLY */}
          <button 
            className={`read-more-btn ${showMore2 ? "active" : ""}`}
            onClick={() => setShowMore2(!showMore2)}
          >
            {showMore2 ? "Read Less" : "Read More"}
            {showMore2
              ? <IoIosArrowUp className="react-icon-arrow" size={18} />
              : <IoIosArrowDown className="react-icon-arrow" size={18} />
            }
          </button>
        </div>
      </div>
    </>
  );
};

export default Process;
