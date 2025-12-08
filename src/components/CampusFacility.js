import React from "react";
import "./CampusFacility.css";
import {
  FaChalkboardTeacher,
  FaBusAlt,
  FaBookReader,
  FaThermometerThreeQuarters,
  FaVideo,
  FaFlask,
  FaWheelchair,
  FaHorseHead
} from "react-icons/fa";

const facilityData = [
  { icon: <FaChalkboardTeacher />, title: "Smart", desc: "Classrooms" },
  { icon: <FaBusAlt />, title: "GPS Enabled", desc: "Transport" },
  { icon: <FaBookReader />, title: "Exemplary", desc: "Library" },
  { icon: <FaThermometerThreeQuarters />, title: "Air Conditioned", desc: "Campus" },
  { icon: <FaVideo />, title: "CCTV Monitored", desc: "Campus" },
  { icon: <FaFlask />, title: "Contemporary", desc: "Laboratories" },
  { icon: <FaWheelchair />, title: "Lift", desc: "Access" },
  { icon: <FaHorseHead />, title: "Horse", desc: "Riding" },
];

const CampusFacility = () => {
  return (
    <div className="facility-section">
        {/* Heading Section */}
        <div className="facility-heading">
            <h3 className="page-heading">Campus Facilities</h3>
            <p>Providing modern amenities for a better learning experience.</p>
        </div>

      {/* Facilities Grid */}
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
