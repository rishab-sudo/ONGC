import React, { useState } from "react";
import Banner from "../components/Banner";
import { Container, Modal } from "react-bootstrap";
import { FaFilePdf, FaYoutube } from "react-icons/fa";
import "./Mandatory.css";

const pdfFiles = {
  affiliation: require("../assets/doc/Affiliation-2027-1.pdf"),
  society: require("../assets/doc/2.pdf"),
  noc: require("../assets/doc/3.pdf"),
    building : require("../assets/doc/Building Safety Certificate26.pdf"),
  deo: require("../assets/doc/8.pdf"),
  water: require("../assets/doc/Water PHED26.pdf"),
   sanitise: require("../assets/doc/Sanitasion26.pdf"),
    calendar: require("../assets/doc/Academic-Calendar-2025-2026.pdf"),
rte:require("../assets/doc/Academic-Calendar-2025-2026.pdf"),
  fire: require("../assets/doc/Fire-Certificate-ONGC-Community-School-6.pdf"),
  fees: require("../assets/doc/FEE-STRUCTURE-2025-26.jpeg"),
    smc: require("../assets/doc/smc-9.pdf"),
    pgt:require("../assets/doc/Teachers.pdf"),
    tgt:require("../assets/doc/Teachers.pdf"),
        prt:require("../assets/doc/Teachers.pdf"),
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
      <tr>
        <td>1</td>
        <td>Name of the School</td>
        <td>ONGC Community School</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Affiliation No. (If Applicable)</td>
        <td>2132671</td>
      </tr>
      <tr>
        <td>3</td>
        <td>School Code (If Applicable)</td>
        <td>71215</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Complete Address with PIN Code</td>
        <td>
          ONGC Community School, Hargaon-Laharpur Road in Paintala village,
 <br/> near Ranifarm, Sitapur, Uttar Pradesh, 261135</td> 
       
      </tr>
      <tr>
        <td>5</td>
        <td>Principal Name & Qualification</td>
        <td>Danish Khan (M.A, B.Ed)</td>
      </tr>
      <tr>
        <td>6</td>
        <td>School Email ID</td>
        <td>info@ongcschool.com</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Contact Details (Landline/Mobile)</td>
        <td>+91-9198544441</td>
      </tr>
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
        <td>
          Copies of Affiliation / Upgradation Letter and Recent Extension of
          Affiliation, if any
        </td>
        <td>
          <FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.affiliation)} />
        </td>
      </tr>

      <tr>
        <td>2</td>
        <td>
          Copies of Societies / Trust / Company Registration / Renewal
          Certificate, as applicable
        </td>
        <td>
          <FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.society)} />
        </td>
      </tr>

      <tr>
        <td>3</td>
        <td>
          Copy of No Objection Certificate (NOC) issued, if applicable, by the
          State Govt./UT
        </td>
        <td>
          <FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.noc)} />
        </td>
      </tr>

      <tr>
        <td>4</td>
        <td>
          Copies of Recognition Certificate under RTE Act, 2009, and its
          renewal if applicable
        </td>
        <td>
          <FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles)} /> 
        </td>
      </tr>

      <tr>
        <td>5</td>
        <td>
          Copy of Valid Building Safety Certificate as per the National
          Building Code
        </td>
        <td>
          <FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.building)} />
        </td>
      </tr>

      <tr>
        <td>6</td>
        <td>
          Copy of Valid Fire Safety Certificate issued by the Competent
          Authority
        </td>
        <td>
          <FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.fire)} />
        </td>
      </tr>

      <tr>
        <td>7</td>
        <td>
          Copy of the DEO Certificate submitted by the school for Affiliation /
          Upgradation / Extension of Affiliation or Self Certification by
          School
        </td>
        <td>
          <FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.deo)} />
        </td>
      </tr>

      <tr>
        <td>8</td>
        <td>
          Copies of Valid Drinking Water, Health and Sanitation Certificates
          and Water Testing Report
        </td>
        <td>
          <FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.water)} />
        </td>
      </tr>

          <tr>
        <td>9</td>
        <td>
      Proforma regarding safe Drinking Water and Sanitary Condition Certificate
        </td>
        <td>
          <FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.sanitise)} />
        </td>
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


 <h2 className="ongc-table-heading">Result Class: X</h2>
<Container className="ongc-table-scroll">
  <table className="ongc-table">
    <thead>
      <tr>
        <th>Sl No.</th>
        <th>Year</th>
        <th>No. of Registered Students</th>
        <th>No. of Students Passed</th>
        <th>Pass Percentage</th>
        <th>Remarks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>2022-23</td>
        <td>77</td>
        <td>77</td>
        <td>100%</td>
        <td>-</td>
      </tr>

      <tr>
        <td>2</td>
        <td>2023-24</td>
        <td>106</td>
        <td>105</td>
        <td>95.05%</td>
        <td>-</td>
      </tr>

      <tr>
        <td>3</td>
        <td>2024-25</td>
        <td>114</td>
        <td>114</td>
        <td>100%</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
</Container>


 <h2 className="ongc-table-heading">Result Class: XII</h2>
<Container className="ongc-table-scroll">
  <table className="ongc-table">
    <thead>
      <tr>
        <th>Sl No.</th>
        <th>Year</th>
        <th>No. of Registered Students</th>
        <th>No. of Students Passed</th>
        <th>Pass Percentage</th>
        <th>Remarks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>2022-23</td>
        <td>45</td>
        <td>38</td>
        <td>84.44%</td>
        <td>-</td>
      </tr>

      <tr>
        <td>2</td>
        <td>2023-24</td>
        <td>62</td>
        <td>54</td>
        <td>87.01%</td>
        <td>-</td>
      </tr>

      <tr>
        <td>3</td>
        <td>2024-25</td>
        <td>68</td>
        <td>63</td>
        <td>92.64%</td>
        <td>-</td>
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
        <th>Total</th>
        <th>Details / Documents</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>Principal</td>
        <td>1</td>
        <td>Danish Khan (M.A, B.Ed)</td>
      </tr>

      <tr>
        <td>2</td>
        <td>Vice Principal</td>
        <td>–</td>
        <td>–</td>
      </tr>

      <tr>
        <td>3</td>
        <td>Headmistress / Headmaster</td>
        <td>1</td>
        <td>Pranjali Shukla (MCA, B.Ed)</td>
      </tr>

      <tr>
        <td>4</td>
        <td>Total No. of Teachers</td>
        <td>49</td>
        <td>–</td>
      </tr>

      <tr>
        <td></td>
        <td>• PGT</td>
        <td>13</td>
        <td>
          <FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.pgt)} />
        </td>
      </tr>

      <tr>
        <td></td>
        <td>• TGT</td>
        <td>16</td>
        <td>
          <FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.tgt)} />
        </td>
      </tr>

      <tr>
        <td></td>
        <td>• PRT</td>
        <td>13</td>
        <td>
          <FaFilePdf className="pdf-icon" onClick={() => handleShowPDF(pdfFiles.prt)} />
        </td>
      </tr>

      <tr>
        <td>5</td>
        <td>Teachers Section Ratio</td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>6</td>
        <td>SPECIAL EDUCATOR</td>
        <td>1</td>
        <td>Kaushal Kishore</td>
      </tr>

   <tr>
        <td>7</td>
        <td>CAREER COUNSELLOR</td>
        <td>1</td>
        <td>SHAFQUAT NUMA</td>
      </tr>

         <tr>
        <td>8</td>
        <td>COUNSELING & WELLNESS TEACHER</td>
        <td>1</td>
        <td>ANJALI SHUKLA</td>
      </tr>

 
 
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
      <tr>
        <td>1</td>
        <td>Total Campus Area of the School (in sqr mtr)</td>
        <td>15621.26 (in square mtr)</td>
      </tr>

      <tr>
        <td>2</td>
        <td>No. and Size of the Classroom (in sqr mtr)</td>
        <td>34 and 26×20 (in sq. ft)</td>
      </tr>

      <tr>
        <td>3</td>
        <td>No. and Size of Laboratories including Computer Labs (in sqr mtr)</td>
        <td>066 and 40×32 (in sq. ft)</td>
      </tr>

      <tr>
        <td>4</td>
        <td>No. and Size of Library (in sqr mtr)</td>
        <td>01 and 26×20 (in sq. ft)</td>
      </tr>

      <tr>
        <td>5</td>
        <td>Internet Facility (Yes/No)</td>
        <td>Yes</td>
      </tr>

      <tr>
        <td>6</td>
        <td>No. of Girls Toilets</td>
        <td>15</td>
      </tr>

      <tr>
        <td>7</td>
        <td>No. of Boys Toilets</td>
        <td>16</td>
      </tr>

      <tr>
        <td>8</td>
        <td>No. of CWSN Toilets</td>
        <td>01</td>
      </tr>

      <tr>
        <td>9</td>
        <td>Link of YouTube Video of the Inspection of School Covering the Infrastructure of the School</td>
        <td>
          <span>YouTube </span>
          <FaYoutube
            className="pdf-icon"
            onClick={() => window.open("https://www.youtube.com/watch?v=3RWPGzQ4QC0", "_blank")}
          />
        </td>
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
          <iframe
src={`${pdfSrc}#toolbar=0&navpanes=0&scrollbar=0`}
title="PDF Viewer"
width="100%"
height="570px"
onContextMenu={(e) => e.preventDefault()}
/>
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Mandatory;
