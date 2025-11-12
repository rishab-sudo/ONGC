import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import ScrolLinks from "../components/ScrolLinks";
import PolicyCards from "../components/PolicyCards";
import QuerySection from "../components/QuerySection";
import "./About.css";

// ✅ Move static arrays OUTSIDE the component
const section1Images = [
  require("../assets/mvv.jpg"),
  require("../assets/mvv.jpg"),
  require("../assets/mvv.jpg"),
];

const section2Images = [
  require("../assets/mvv.jpg"),
  require("../assets/mvv.jpg"),
  require("../assets/mvv.jpg"),
];

const section3Images = [
  require("../assets/mvv.jpg"),
  require("../assets/mvv.jpg"),
  require("../assets/mvv.jpg"),
];

const About = () => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  // ✅ No eslint-disable needed anymore
  useEffect(() => {
    const interval1 = setInterval(() => {
      setIndex1((prev) => (prev + 1) % section1Images.length);
    }, 2000);

    const interval2 = setInterval(() => {
      setIndex2((prev) => (prev + 1) % section2Images.length);
    }, 2500);

    const interval3 = setInterval(() => {
      setIndex3((prev) => (prev + 1) % section3Images.length);
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []); // ✅ Clean and warning-free

  return (
    <>
      <Banner
        title="About Us"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "About Us", link: "/About Us" },
        ]}
      />
      <ScrolLinks />

      {/* ===== Section 1 ===== */}
      <Container fluid className="about-fluid">
        <Container className="about-container1">
          <div className="about-content-section1">
            <p className="page-heading about-heading">About ONGC Community</p>
            <p className="page-text about-text">
              <span className="highlight">“Making Tomorrow Brighter”</span> is
              the motto of
              <span className="highlight"> ONGC Community School</span>.
              <span className="highlight"> ONGC Community School</span> is the
              <span className="highlight"> first of its kind in India</span>.
              Launched by <span className="highlight">ONGC</span> with
              <span className="highlight"> SDMC Trust</span> as its
              <span className="highlight"> COM Partner</span>. Our aim was to
              start a school that had
              <span className="highlight">
                {" "}
                sensitivity and a deeper understanding of the child
              </span>
              .
            </p>

            <p className="page-text">
              <span className="highlight">ONGC CS</span> epitomises
              <span className="highlight"> vibrancy and freshness</span>,
              dovetailing much of the
              <span className="highlight">
                {" "}
                ethos of the new post-independence India
              </span>{" "}
              into its
              <span className="highlight">
                {" "}
                educational program and philosophy
              </span>
              . The school is a
              <span className="highlight"> secular co-educational institution</span>,
              integrating into its curriculum
              <span className="highlight"> concern for the environment</span>,
              the <span className="highlight"> spirit of community service</span>,
              and
              <span className="highlight">
                {" "}
                international peace and brotherhood
              </span>
              .
            </p>

            <p className="page-text">
              Besides <span className="highlight"> spacious classrooms</span> and
              <span className="highlight"> playgrounds</span>, we have fully
              developed facilities for each department, including
              <span className="highlight"> Maths and Science laboratories</span>,
              a <span className="highlight"> Computer Resource Center</span>,
              <span className="highlight"> well-stocked libraries</span>, an
              <span className="highlight"> auditorium and open-air stage</span>,
              and a
              <span className="highlight"> Teachers’ Learning Center</span>.
            </p>
          </div>
        </Container>
      </Container>

      {/* ===== Mission ===== */}
      <Container fluid className="mvc-section">
        <Container className="mvc-row mvc-row-1">
          <div className="mvc-image">
            <img src={section1Images[index1]} alt="Mission" />
          </div>
          <div className="mvc-content">
            <h2 className="mvc-title">Mission</h2>
            <p className="mvc-text">
              ONGC Community School aims to nurture the holistic development of
              every child—physically, emotionally, mentally, and spiritually. Our
              mission is to awaken each student’s unique potential through
              meaningful learning experiences, fostering creativity, compassion,
              and resilience. We strive to cultivate lifelong learners who
              contribute responsibly to society, uphold global harmony, and lead
              with integrity and purpose.
            </p>
          </div>
        </Container>
      </Container>

      {/* ===== Vision ===== */}
      <Container fluid className="mvc-section">
        <Container className="mvc-row mvc-row-2">
          <div className="mvc-image">
            <img src={section2Images[index2]} alt="Vision" />
          </div>
          <div className="mvc-content">
            <h2 className="mvc-title">Vision</h2>
            <p className="mvc-text">
              To build a dynamic centre of excellence that nurtures intellectual
              curiosity, moral integrity, and social responsibility. ONGC
              Community School envisions an inclusive learning community where
              every student is inspired to realize their full potential, become a
              lifelong learner, and emerge as a compassionate global citizen
              contributing positively to the world.
            </p>
          </div>
        </Container>
      </Container>

      {/* ===== Values ===== */}
      <Container fluid className="mvc-section">
        <Container className="mvc-row mvc-row-3">
          <div className="mvc-image">
            <img src={section3Images[index3]} alt="Values" />
          </div>
          <div className="mvc-content">
            <h2 className="mvc-title">Values</h2>
            <p className="mvc-text">
              <span style={{ fontSize: "18px", fontWeight: "600" }}>
                Excellence in Learning:
              </span>{" "}
              Fostering curiosity, creativity, and academic achievement.
              <br />
              <span style={{ fontSize: "18px", fontWeight: "600" }}>
                Integrity and Respect:
              </span>{" "}
              Building character through honesty, empathy, and respect.
              <br />
              <span style={{ fontSize: "18px", fontWeight: "600" }}>
                Community & Environment:
              </span>{" "}
              Encouraging social responsibility and environmental care.
              <br />
              <span style={{ fontSize: "18px", fontWeight: "600" }}>
                Holistic Growth:
              </span>{" "}
              Promoting balanced development of mind, body, and character.
              <br />
            </p>
          </div>
        </Container>
      </Container>

      <PolicyCards />
      <QuerySection />
    </>
  );
};

export default About;
