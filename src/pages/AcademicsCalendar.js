import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import "./AcademicsCalendar.css";

const monthImages = {
  April: require("../assets/calendar.jpeg"),
  May: require("../assets/calendar.jpeg"),
  June: require("../assets/calendar.jpeg"),
  July: require("../assets/calendar.jpeg"),
  August: require("../assets/calendar.jpeg"),
  September: require("../assets/calendar.jpeg"),
  October: require("../assets/calendar.jpeg"),
  November: require("../assets/calendar.jpeg"),
  December: require("../assets/calendar.jpeg"),
  January: require("../assets/calendar.jpeg"),
  February: require("../assets/calendar.jpeg"),
  March: require("../assets/calendar.jpeg"),
};

const AcademicsCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState("April");

  return (
    <>
      <Banner
        title="Academic Calendar"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "Academic Calendar", link: "/Academic Calendar" },
        ]}
      />
      <Container className="calendar-container">
        {/* Top Button Section */}
        <div className="month-buttons-box">
          {Object.keys(monthImages).map((month) => (
            <button
              key={month}
              className={`month-btn ${selectedMonth === month ? "active" : ""}`}
              onClick={() => setSelectedMonth(month)}
            >
              {month}
            </button>
          ))}
        </div>

        {/* Calendar Image Section */}
        <div className="calendar-image-box">
          <img
            src={monthImages[selectedMonth]}
            alt={`${selectedMonth} Calendar`}
            className="calendar-img"
          />
        </div>
      </Container>
    </>
  );
};

export default AcademicsCalendar;
