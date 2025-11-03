import React from "react";
import "./BannerButtons.css";
import { Container } from "react-bootstrap";

const BannerButtons = () => {
  const buttons = [
    { icon: require("../assets/Banner/ico_1.png"), text: "Upcoming Events" },
    { icon: require("../assets/Banner/ico_2.png"), text: "Fee Structure" },
    { icon: require("../assets/Banner/ico_3.png"), text: "Admission" },
    { icon: require("../assets/Banner/ico_4.png"), text: "Our School Values" },
  ];

  return (
    <Container className="banner-btn-fluid">
        {/* <div className="button-heading-top">
            <h1 >Our Announcements</h1>
        </div> */}
    <div className="banner-buttons-container">
      {buttons.map((btn, index) => (
        <div className="banner-button" key={index}>
          <img  src={btn.icon} alt={btn.text} className="btn-icon" />
          <span className="btn-text">{btn.text}</span>
        </div>
      ))}
    </div>
    </Container>
  );
};

export default BannerButtons;
