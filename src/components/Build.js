import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Build.css";

const Build = () => {
  const secRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const rect = secRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Section visibility progress (0 → start, 1 → fully visible)
      let p = 1 - rect.top / windowHeight;
      if (p < 0) p = 0;
      if (p > 1) p = 1;

      setProgress(p);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // movement mapping
  const moveLeft = progress * 200;   // 200px final left distance

  return (
    <div className="build" ref={secRef}>
      <Container className="build-wrap">

        {/* IMAGE - starts near text then shifts left */}
        <div className="build-img" style={{ transform:`translateX(-${moveLeft}px)` }}>
          <img src={require("../assets/Banner/ongc-girl.png")} alt="child learning"/>
        </div>

        {/* TEXT */}
        <div className="build-text">
          <h1>Let's build your child's future together</h1>
          {/* <p>Book an appointment today & begin your child’s growth journey.</p> */}
          <button>Book Appointment</button>
        </div>

      </Container>
    </div>
  );
};

export default Build;
