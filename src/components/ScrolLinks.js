import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ScrolLinks.css";

const ScrolLinks = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200; // scroll step
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  // Start showing buttons 3–6 initially
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 350;
    }
  }, []);

  const buttons = [
    { to: "/AdmissionPolicy", text: "Admission Policy" },
    { to: "/feeStructure", text: "Fee Structure" },
    { to: "/AcademicsCalendar", text: "Academics Calendar" },
    { to: "/Activities", text: "Activities" },
    { to: "/Gallery", text: "Gallery" },
    { to: "/GeneralPolicy", text: "General Policies" },
    { to: "/Mandatory", text: "Mandatory PD" },
    { to: "/contact", text: "Contact Us" },
  ];

  return (
    <div className="scroll-links-section">
      <button className="scroll-btn left" onClick={() => scroll("left")}>
        &#8249;
      </button>

      <div className="scroll-buttons-container" ref={scrollRef}>
        {buttons.map((btn, index) => (
          <Link key={index} to={btn.to} className="info-btn">
            {btn.text}
          </Link>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll("right")}>
        &#8250;
      </button>
    </div>
  );
};

export default ScrolLinks;
