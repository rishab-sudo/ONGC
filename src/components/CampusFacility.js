import React from "react";
import "./CampusFacility.css";

import { FaBuilding, FaChalkboardTeacher, FaMedal } from "react-icons/fa";
import { FaPersonRunning } from "react-icons/fa6"; // Running icon
import { GiSoccerField, GiTabletopPlayers } from "react-icons/gi"; // Playground & indoor sport

const facilityData = [
  { icon: <FaBuilding />, title: "Modern Infrastructure", desc: "Well-equipped campus design" },
  { icon: <FaChalkboardTeacher />, title: "Smart Classrooms", desc: "Digital learning environment" },
  { icon: <FaMedal />, title: "Best Academics", desc: "Excellence in learning outcomes" },
  { icon: <FaPersonRunning />, title: "Running Track", desc: "Athletic fitness & training" },
  { icon: <GiSoccerField />, title: "Playground Field", desc: "Outdoor sports & activities" },
  { icon: <GiTabletopPlayers />, title: "Indoor Sports", desc: "Recreational games area" },
];

const CampusFacility = () => {
  return (
    <div className="facility-section">
      
      {/* Heading */}
      <div className="facility-heading">
        <h3 className="page-heading">Campus Facilities</h3>
        <p>World-class amenities for learning, sports & overall development.</p>
      </div>

      {/* Facility Grid */}
      <div className="facility-container">
        {facilityData.map((item, index) => (
          <div className="facility-box" key={index}>
            <span className="facility-icon">{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusFacility;
