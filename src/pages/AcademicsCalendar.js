import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import "./AcademicsCalendar.css";

/* ✅ IMPORT ALL IMAGES */
import bannerImg from "../assets/parents-guide-img.jpg";

import cal1 from "../assets/calendar/Calendar-01.png";
import cal2 from "../assets/calendar/Calendar-02.png";
import cal3 from "../assets/calendar/Calendar-03.png";
import cal4 from "../assets/calendar/Calendar-04.png";
import cal5 from "../assets/calendar/Calendar-05.png";
import cal6 from "../assets/calendar/Calendar-06.png";
import cal7 from "../assets/calendar/Calendar-07.png";
import cal8 from "../assets/calendar/Calendar-08.png";
import cal9 from "../assets/calendar/Calendar-09.png";
import cal10 from "../assets/calendar/Calendar-10.png";
import cal11 from "../assets/calendar/Calendar-11.png";
import cal12 from "../assets/calendar/Calendar-12.png";

/*  (April → March) */
const monthsOrder = [
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
];

/* ✅ MAP IMAGES */
const monthImages = {
  April: cal1,
  May: cal2,
  June: cal3,
  July: cal4,
  August: cal5,
  September: cal6,
  October: cal7,
  November: cal8,
  December: cal9,
  January: cal10,
  February: cal11,
  March: cal12,
};

const AcademicsCalendar = () => {
  /* ✅ GET CURRENT MONTH */
  const currentMonth = new Date().toLocaleString("en-US", {
    month: "long",
  });

  /* ✅ FALLBACK (important fix) */
  const initialMonth = monthImages[currentMonth]
    ? currentMonth
    : "April";

  const [selectedMonth, setSelectedMonth] = useState(initialMonth);

  return (
    <>
      <Banner
        title="Academic Calendar"
        image={bannerImg}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "Academic Calendar", link: "/academic-calendar" },
        ]}
      />

      <Container className="calendar-container">
        {/* 🔥 MONTH BUTTONS */}
        <div className="month-buttons-box">
          {monthsOrder.map((month) => (
            <button
              key={month}
              className={`month-btn ${
                selectedMonth === month ? "active" : ""
              }`}
              onClick={() => setSelectedMonth(month)}
            >
              {month}
            </button>
          ))}
        </div>

        {/* 🔥 IMAGE */}
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