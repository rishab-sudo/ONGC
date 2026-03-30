import React, { useState } from "react";
import Banner from "../components/Banner";
import Swal from "sweetalert2";
import { tcData } from "../tcData";
import "./TcVerification.css";

const TcVerification = () => {
  const [tcNumber, setTcNumber] = useState("");
  const [dob, setDob] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

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
        {/* <p>Enter your TC Number and Date of Birth</p> */}

        {/* TC Number */}
        <div className="tc-form-wrapper">
        <div className="form-group">
          <label className="tc-lables">Enter TC Number</label>
          <input
            type="text"
            placeholder="Enter TC Number"
            value={tcNumber}
            onChange={(e) => setTcNumber(e.target.value)}
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
          />
        </div>

        <button onClick={handleSearch} className="tc-verify-btn">Verify</button>
      </div>
      </div>

      {/* Popup Modal */}
      {selectedFile && (
        <div
          className="popup"
          onClick={() => setSelectedFile(null)} // close on outside click
        >
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()} // prevent close on inside click
          >
            <button onClick={() => setSelectedFile(null)}>Close</button>

        {selectedFile.endsWith(".pdf") ? (
  <iframe src={selectedFile} title="TC Preview" />
) : (
  <img src={selectedFile} alt="TC Preview" className="popup-image" />
)}
          </div>
        </div>

      )}
    </div>
  );
};

export default TcVerification;