import React from "react";
import { Container } from "react-bootstrap";
import "./Facilities.css";

const facilitiesData = [
  { img: require("../assets/icons/infrastructure1.png"), title: "Classroom" },
  { img: require("../assets/icons/infrastructure2.png"), title: "Art & Craft" },
  { img: require("../assets/icons/infrastructure6.png"), title: "Science Lab" },
  { img: require("../assets/icons/infrastructure7.png"), title: "Infrastructure" },
  { img: require("../assets/icons/infrastructure8.png"), title: "Computer Lab" },
  { img: require("../assets/icons/infrastructure9.png"), title: "Performing Arts" },
  { img: require("../assets/icons/infrastructure3.png"), title: "Sports & Other Facilities" },
  { img: require("../assets/icons/infrastructure4.png"), title: "Library" },
  { img: require("../assets/icons/infrastructure5.png"), title: "Auditorium" },
];

const Facilities = () => {
  return (
    <div className="facilities-section" id="facilities">
      <h2 className="facilities-heading page-heading">Our Facilities</h2>
      <Container className="facilities-grid">
        {facilitiesData.map((item, index) => (
          <div className="facility-box" key={index}>
            <img src={item.img} alt={item.title} className="facility-icon" />
            <span className="facility-title">{item.title}</span>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Facilities;
