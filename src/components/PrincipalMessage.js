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

            <p className="lead">
              It is my pleasure to welcome you at Radha Madhav Public School
              community. This is a school where we are deeply committed to
              ensuring that every day, each and every student has the attention
              and care of our professional staff. We work to foster a school
              environment that is supportive and encouraging for both children
              and adults.
            </p>

            {expanded && (
              <p className="lead extra-text mt-3">
                We believe in nurturing each student’s academic, social, and
                emotional growth. Our goal is to empower students to become
                confident, lifelong learners who contribute positively to
                society. Together, with the support of parents and teachers, we
                aim to create a dynamic and inclusive environment where every
                child can succeed.
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
