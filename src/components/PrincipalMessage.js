import React, { useState } from "react";
import "./PrincipalMessage.css";
// import principalImg from "../assets/principal.jpg";

const PrincipalMessage = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMessage = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="principal-message py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div className="col-md-6 ">
            <h2 className="mb-4 fw-bold">Principal&apos;s Message</h2>

            <p className=" page-text">
           Welcome to ONGC Community School, a vibrant learning community where 
           every child is valued and inspired. Our dedicated educators nurture curiosity, 
           creativity, and character through holistic education. We strive to create a safe, inclusive, and supportive environment that empowers students to learn with purpose and truly “Make Tomorrow Brighter.”
            </p>

            {expanded && (
              <p className=" extra-text page-text">
           At ONGC School, we nurture not only academic growth but also confidence, character, and compassion. With the support of our parents and teachers, we strive to provide a caring, inclusive environment where
            every child is encouraged to learn, grow, and succeed.
              </p>
            )}

            <button className="view-btn mt-3" onClick={toggleMessage}>
              {expanded ? "View Less" : "View More"}
            </button>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            {/* <img
              src={principalImg}
              alt="Principal"
              className="img-fluid rounded shadow-lg"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
