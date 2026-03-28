import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import "./AcademicsCalendar.css";

const monthImages = {
  April: require("../assets/calendar/Calendar-1.png"),
  May: require("../assets/calendar/Calendar-2.png"),
  June: require("../assets/calendar/Calendar-3.png"),
  July: require("../assets/calendar/Calendar-4.png"),
  August: require("../assets/calendar/Calendar-5.png"),
  September: require("../assets/calendar/Calendar-6.png"),
  October: require("../assets/calendar/Calendar-7.png"),
  November: require("../assets/calendar/Calendar-8.png"),
  December: require("../assets/calendar/Calendar-9.png"),
  January: require("../assets/calendar/Calendar-10.png"),
  February: require("../assets/calendar/Calendar-11.png"),
  March: require("../assets/calendar/Calendar-12.png"),
};

const AcademicsCalendar = () => {
const currentMonth = new Date().toLocaleString("en-US", { month: "long" });
const [selectedMonth, setSelectedMonth] = useState(currentMonth);

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
