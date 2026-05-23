import React from "react";
import Banner from "../components/Banner";
import "./AbsencePolicy.css";
import { Container } from "react-bootstrap";

const absencePoints = [
  "Minimum attendance required by students: 75% (Mandatory)",
];

const AbsencePolicy = () => {
  return (
    <>
      <Banner
        title="Attendance Policy"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "Attendance Policy", link: "/Attendance Policy" },
        ]}
      />

      <Container fluid className="absence-policy-fluid g-0">
        <Container className="absence-policy">
          <div className="absence-policy-container">
            <div className="absence-policy-box">
              <div className="d-flex justify-content-center align-items-center">
                <p className="page-heading">
                 Attendance Policy
                </p>
              </div>

              <ul className="attendance-list">
                {absencePoints.map((point, index) => (
                  <li style={{fontSize:"1.2rem",textAlign:"center",fontWeight:"600"}}className="" key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default AbsencePolicy;