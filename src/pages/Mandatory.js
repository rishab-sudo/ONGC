import React, { useState } from "react";
import Banner from "../components/Banner";
import { Container, Modal } from "react-bootstrap";
import { FaFilePdf, FaYoutube } from "react-icons/fa";
import "./Mandatory.css";

const pdfFiles = {
  affiliation: require("../assets/doc/Affiliation-2027-1.pdf"),
  society: require("../assets/doc/2.pdf"),
  noc: require("../assets/doc/3.pdf"),
    building : require("../assets/doc/Building-Safety-Certificate-.pdf"),
  deo: require("../assets/doc/8.pdf"),
  water: require("../assets/doc/6.pdf"),

  fire: require("../assets/doc/Fire-Certificate-ONGC-Community-School-6.pdf"),
  fees: require("../assets/doc/FEE-STRUCTURE-2025-26.jpeg"),
    smc: require("../assets/doc/smc-9.pdf"),

};

const Mandatory = () => {
  const [showModal, setShowModal] = useState(false);
  const [pdfSrc, setPdfSrc] = useState("");

  const handleShowPDF = (src) => {
    setPdfSrc(src);
    setShowModal(true);
  };

  return (
    <>
      <Banner
        title="Mandatory Public Disclosure"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "Mandatory Disclosure", link: "/mandatory-disclosure" },
        ]}
      />

      <div className="ongc-table-container">
        {/* A: GENERAL INFORMATION */}
        <h2 className="ongc-table-heading">A: General Information</h2>
        <Container className="ongc-table-scroll">
          <table className="ongc-table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Information</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Name of the School</td><td>ONGC Community School</td></tr>
              <tr><td>2</td><td>Affiliation No (If Applicable)</td><td>2132671</td></tr>
              <tr><td>3</td><td>School Code (If Applicable)</td><td>71215</td></tr>
              <tr><td>4</td><td>Address</td><td>Village – Paintala, Near Rani Farm, Hargaon – Laharpur Road, Sitapur</td></tr>
              <tr><td>5</td><td>Principal Name & Qualification</td><td>Mr. Danish Khan — M.A, B.Ed</td></tr>
              <tr><td>6</td><td>School Email ID</td><td>ongc.school@yahoo.com</td></tr>
              <tr><td>7</td><td>Contact Details</td><td>+91-9198544441</td></tr>
            </tbody>
          </table>
        </Container>

        {/* B: DOCUMENTS AND INFORMATION */}
        <h2 className="ongc-table-heading">B: Documents and Information</h2>
        <Container className="ongc-table-scroll">
          <table className="ongc-table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Documents / Information</th>
                <th>View Documents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Copies of Affiliation/Upgradation Letter</td>
                <td><FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.affiliation)} /></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Copies of Societies/Trust Registration Certificate</td>
                <td><FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.society)} /></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Copies of NOC Issued by State Govt./UT</td>
                <td><FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.noc)} /></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Recognition Certificate under RTE Act 2009</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Building Safety Certificate</td>
                <td><FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.building)} /></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Fire Safety Certificate</td>
                <td><FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.fire)} /></td>
              </tr>
              <tr>
                <td>7</td>
                <td>DEO Certificate / Self Certification</td>
                <td><FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.deo)} /></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Water, Health and Sanitation Certificates</td>
                <td><FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.water)} /></td>
              </tr>
            </tbody>
          </table>
        </Container>

        {/* C: RESULT AND ACADEMICS */}
        <h2 className="ongc-table-heading">C: Result and Academics</h2>
        <Container className="ongc-table-scroll">
          <table className="ongc-table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Documents / Information</th>
                <th>View Documents</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Fee Structure of the School</td><td><FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.fees)} /></td></tr>
              <tr><td>2</td><td>Annual Academic Calendar</td><td><FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.calendar)} /></td></tr>
              <tr><td>3</td><td>List of School Management Committee (SMC)</td><td><FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.smc)} /></td></tr>
              <tr><td>4</td><td>List of Parents Teachers Association (PTA) Members</td><td>✔</td></tr>
              <tr><td>5</td><td>Last Three-Year Result of the Board Examination</td><td>✔</td></tr>
            </tbody>
          </table>
        </Container>

        <h2 className="ongc-table-heading">Result Class: XII (2023-2024)</h2>
        <Container className="ongc-table-scroll">
          <table className="ongc-table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Year</th>
                <th>Registered Students</th>
                <th>Students Passed</th>
                <th>Pass Percentage</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2023-24</td>
                <td>62</td>
                <td>60</td>
                <td>96.77%</td>
                <td>2 students did not appear for the exam</td>
              </tr>
            </tbody>
          </table>
        </Container>

        {/* D: STAFF (TEACHING) */}
        <h2 className="ongc-table-heading">D: Staff (Teaching)</h2>
        <Container className="ongc-table-scroll">
          <table className="ongc-table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Information</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Principal</td><td>01</td></tr>
              <tr><td>2</td><td>Total No. of Teachers</td><td>PGT: 11, TGT: 15, PRT: 12</td></tr>
              <tr><td>3</td><td>Teacher Section Ratio</td><td>1.83:1</td></tr>
              <tr><td>4</td><td>Special Educator</td><td>Mr. Manish Tiwari (M.Com, Special B.Ed.)</td></tr>
              <tr><td>5</td><td>Counsellor and Wellness Teacher</td><td>Mrs. Ekta Singh (M.A in Psychology, D.El.Ed)</td></tr>
            </tbody>
          </table>
        </Container>

        {/* E: SCHOOL INFRASTRUCTURE */}
        <h2 className="ongc-table-heading">E: School Infrastructure</h2>
        <Container className="ongc-table-scroll">
          <table className="ongc-table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Information</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Total Campus Area (sq. mtr)</td><td>15621.26</td></tr>
              <tr><td>2</td><td>No. and Size of Classrooms</td><td>34 and 26×20 (sq. ft)</td></tr>
              <tr><td>3</td><td>No. and Size of Labs</td><td>6 and 40×32 (sq. ft)</td></tr>
              <tr><td>4</td><td>Internet Facility</td><td>Yes</td></tr>
              <tr><td>5</td><td>No. of Girls Toilets</td><td>8</td></tr>
              <tr><td>6</td><td>No. of Boys Toilets</td><td>10</td></tr>
              <tr>
                <td>7</td>
                <td>Video of School Infrastructure</td>
                <td><span>YouTube </span><FaYoutube className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.affiliation)} /></td>
              </tr>
            </tbody>
          </table>
        </Container>
      </div>

      {/* PDF Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Document Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe src={pdfSrc} title="PDF Viewer" width="100%" height="500px" />
        </Modal.Body>
        <Modal.Footer>
          <a href={pdfSrc} download className="download-btn">Download PDF</a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Mandatory;
