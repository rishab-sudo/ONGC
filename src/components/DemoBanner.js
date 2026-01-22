import React from "react";
import "./DemoBanner.css";

const DemoBanner = () => {
  return (
    <div className="demoBanner">
      <div className="banner-media-wrapper">
        <video
          className="banner-video"
          src={require("../assets/video/ONGC VideoForWebSite.mp4")}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
};

export default DemoBanner;
