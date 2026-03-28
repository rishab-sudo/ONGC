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
        <p>Enter your TC Number and Date of Birth</p>

        <label className="tc-lables">Enter TC Number</label>
        <input
          type="text"
          placeholder="Enter TC Number"
          value={tcNumber}
          onChange={(e) => setTcNumber(e.target.value)}
        />

        <label className="tc-lables">Enter DOB (DD-MM-YYYY)</label>
        <input
          type="text"
          placeholder="DD-MM-YYYY"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <button onClick={handleSearch}>Verify</button>
      </div>

      {/* Popup Modal */}
      {selectedFile && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={() => setSelectedFile(null)}>Close</button>

            <iframe
              src={selectedFile}
              title="TC Preview"
              width="100%"
              height="500px"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TcVerification;