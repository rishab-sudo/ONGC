import React, { useState } from "react";
import Banner from "../components/Banner";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";
import { tcData } from "../tcData";
import "./TcVerification.css";

const TcVerification = () => {
  const [tcNumber, setTcNumber] = useState("");
  const [dob, setDob] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // 🔍 SEARCH FUNCTION
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

  // 🧹 CLEAR FUNCTION (Single Click → Clear All)
  const handleClear = () => {
    setTcNumber("");
    setDob("");
    setSelectedFile(null); // popup bhi close ho jayega
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

          {/* BUTTONS */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            
            {/* CLEAR BUTTON */}
            <button
              className="tc-verify-btn"
              onClick={handleClear}
            >
              Clear
            </button>

            {/* VERIFY BUTTON */}
            <button
              onClick={handleSearch}
              className="tc-verify-btn"
            >
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
           <button
  onClick={() => setSelectedFile(null)}
  style={{
    background: "none",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    top: "10px",
    right: "5px",
    fontSize: "27px",
    color: "#000"
  }}
>
  <IoClose />
</button>

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