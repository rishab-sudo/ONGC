import React from "react";
import "./Process.css";

const Process = () => {
  return (
    <>
      {/* === SECTION 1 === */}
      <div
        className="process-container"
        style={{
          backgroundImage: `url(${require('../assets/Banner/ongc-feature_img.jpg')})`
        }}
      >
        <div className="overlay"></div>

        <div className="content">
          <h1>Our Process</h1>
          <p>
            This background is fixed and overlay scrolls.
          </p>
        </div>
      </div>

      {/* === SECTION 2 (same background & overlay) === */}
      <div
        className="process-container"
        style={{
          backgroundImage: `url(${require('../assets/Banner/ongc-feature_img.jpg')})`
        }}
      >
        <div className="overlay"></div>

        <div className="content-2">
          <h1>Next Section</h1>
          <p>
            Same background, same overlay, text is on right bottom area.
          </p>
        </div>
      </div>

      
    </>
  );
};

export default Process;
