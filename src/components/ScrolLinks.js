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
    { to: "/link1", text: "Admission Policy" },
    { to: "/link2", text: "Fee Structure" },
    { to: "/link3", text: "Academics Calendar" },
    { to: "/link4", text: "Activities" },
    { to: "/link5", text: "Gallery" },
    { to: "/link6", text: "General Policies" },
    { to: "/link7", text: "Mandatory PD" },
    { to: "/link8", text: "Contact Us" },
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
