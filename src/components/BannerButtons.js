import React from "react";
import "./BannerButtons.css";
import { Container } from "react-bootstrap";

const BannerButtons = () => {
  const buttons = [
    { 
      icon: require("../assets/Banner/ico_1.png"), 
      text: "Upcoming Events",
      link: "/activities" // internal route or external URL
    },
    { 
      icon: require("../assets/Banner/ico_2.png"), 
      text: "Fee Structure",
      link: "/feeStructure"
    },
    { 
      icon: require("../assets/Banner/ico_3.png"), 
      text: "Admission",
      link: "/AdmissionPolicy"
    },
    { 
      icon: require("../assets/Banner/ico_4.png"), 
      text: " School Values",
      link: "/GeneralPolicy"
    },
  ];

  // Handle redirection (opens internal routes or external links)
  const handleRedirect = (url) => {
    if (url.startsWith("http")) {
      window.open(url, "_blank"); // external site → open new tab
    } else {
      window.location.href = url; // internal route → same tab
    }
  };

  return (
    <Container className="banner-btn-fluid">
      <div className="banner-buttons-container">
        {buttons.map((btn, index) => (
          <div
            className="banner-button"
            key={index}
            onClick={() => handleRedirect(btn.link)} // 👈 redirect logic
            style={{ cursor: "pointer" }}
          >
            <img src={btn.icon} alt={btn.text} className="btn-icon" />
            <span className="btn-text">{btn.text}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BannerButtons;
