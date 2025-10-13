import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./ScrolLinks.css";

const ScrolLinks = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 150; // adjust how much to scroll
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="scroll-links-section">
      <button className="scroll-btn left" onClick={() => scroll("left")}>
        &#8249;
      </button>

      <div className="scroll-buttons-container" ref={scrollRef}>
        <Link to="/link1" className="info-btn">Button 1</Link>
        <Link to="/link2" className="info-btn">Button 2</Link>
        <Link to="/link3" className="info-btn">Button 3</Link>
        <Link to="/link4" className="info-btn">Button 4</Link>
        <Link to="/link5" className="info-btn">Button 5</Link>
        <Link to="/link6" className="info-btn">Button 6</Link>
        <Link to="/link1" className="info-btn">Button 7</Link>
        <Link to="/link2" className="info-btn">Button 8</Link>
        <Link to="/link3" className="info-btn">Button 9</Link>
        <Link to="/link4" className="info-btn">Button 10</Link>
        <Link to="/link5" className="info-btn">Button 11</Link>
        <Link to="/link6" className="info-btn">Button 12</Link>

      </div>

      <button className="scroll-btn right" onClick={() => scroll("right")}>
        <span className="scrol-icon>">&#8250;</span>
      </button>
    </div>
  );
};

export default ScrolLinks;
