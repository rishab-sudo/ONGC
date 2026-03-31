import React, { useState } from "react";
import Banner from "../components/Banner";
import Swal from "sweetalert2";
import { tcData } from "../tcData";
import "./TcVerification.css";

const TcVerification = () => {
  const [tcNumber, setTcNumber] = useState("");
  const [dob, setDob] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // NEW STATES
  const [activeField, setActiveField] = useState(null);
  let pressTimer = null;

  const handleSearch = () => {
    const formattedDob = dob.trim();

    const result = tcData.find(
      (item) =>
        item.tcNumber === tcNumber.trim() &&
        item.dob === formattedDob
    );

    if (result) {
      setSelectedFile(result.file);
    } else {
      Swal.fire({
        icon: "error",
        title: "No Data Found",
        text: "Please check TC Number or DOB",
      });
    }
  };

  // TRACK ACTIVE INPUT
  // const handleFocus = (field) => {
  //   setActiveField(field);
  // };

  // LONG PRESS START
  const handleClearStart = (e) => {
    e.preventDefault();

    pressTimer = setTimeout(() => {
      // LONG PRESS → clear all
      setTcNumber("");
      setDob("");
    }, 600);
  };

  // SHORT CLICK
  const handleClearEnd = () => {
    clearTimeout(pressTimer);

    // SHORT CLICK → remove last character
    if (activeField === "tc") {
      setTcNumber((prev) => prev.slice(0, -1));
    } else if (activeField === "dob") {
      setDob((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div>
      <Banner
        title="TC Verification"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "TC Verification", link: "/tc-verification" },
        ]}
      />

      <div className="tc-container">
        <h2>Transfer Certificate Verification</h2>

        <div className="tc-form-wrapper">

          {/* TC Number */}
          <div className="form-group">
            <label className="tc-lables">Enter Admission Number</label>
            <input
              type="text"
              placeholder="Enter Admission Number"
              value={tcNumber}
              onChange={(e) => setTcNumber(e.target.value)}
              onFocus={() => setActiveField("tc")}
            />
          </div>

          {/* DOB */}
          <div className="form-group">
            <label className="tc-lables">Enter DOB (DD-MM-YYYY)</label>
            <input
              type="text"
              placeholder="DD-MM-YYYY"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              onFocus={() => setActiveField("dob")}
            />
          </div>

          {/* BUTTONS (NO CSS CHANGE) */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            
            {/* CLEAR BUTTON */}
            <button
              className="tc-verify-btn"
              onMouseDown={handleClearStart}
              onMouseUp={handleClearEnd}
              onMouseLeave={handleClearEnd}
            >
              Clear
            </button>

            {/* VERIFY BUTTON */}
            <button onClick={handleSearch} className="tc-verify-btn">
              Verify
            </button>

          </div>

        </div>
      </div>

      {/* Popup Modal */}
      {selectedFile && (
        <div
          className="popup"
          onClick={() => setSelectedFile(null)}
        >
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedFile(null)}>Close</button>

            {selectedFile.endsWith(".pdf") ? (
              <iframe src={selectedFile} title="TC Preview" />
            ) : (
              <img
                src={selectedFile}
                alt="TC Preview"
                className="popup-image"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TcVerification;