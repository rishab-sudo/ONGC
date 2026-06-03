import React from "react";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import "./Fee.css";
import Banner from "../components/Banner";

const Fee = () => {
  const rows = [
    { className: "PG", fee: "₹17,200" },
    { className: "LKG", fee: "₹18,340" },
    { className: "UKG", fee: "₹19,120" },
    { className: "I", fee: "₹22,920" },
    { className: "II", fee: "₹23,100" },
    { className: "III", fee: "₹23,340" },
    { className: "IV", fee: "₹24,600" },
    { className: "V", fee: "₹26,460" },
    { className: "VI", fee: "₹27,420" },
    { className: "VII", fee: "₹28,020" },
    { className: "VIII", fee: "₹28,080" },
    { className: "IX", fee: "₹28,320" },
    { className: "X", fee: "₹31,620" },
    { className: "XI", fee: "₹37,340" },
    { className: "XII", fee: "₹44,040" },
  ];

  return (
    <>
      <Banner
        title="Fee Structure"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "Fee Structure", link: "/fee-structure" },
        ]}
      />

      <Container className="fee-table-container">
        {/* <div className="fee-top-div">
          <img
            src={require("../assets/ongc-logo1.jpg")}
            alt="School Logo"
          />
        </div> */}

        <h2 className="table-title mt-5">
          Academic Session Fee Structure 2026-27
        </h2>

        <div className="fee-table-scroll">
          <Table className="custom-fee-table">
            <thead>
              <tr>
                <th>S.NO.</th>
                <th>CLASS</th>
                <th>AMOUNT</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.className}</td>
                  <td>{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default Fee;