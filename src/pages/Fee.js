import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import './Fee.css'; // make sure this import appears AFTER bootstrap css in your app

const Fee = () => {
  const rows = [
    { className: 'Class-PG', fee: '₹10,170' },
    { className: 'Class-LKG', fee: '₹11,115' },
    { className: 'Class-UKG', fee: '₹11,925' },
    { className: 'Class-I', fee: '₹14,760' },
    { className: 'Class-II', fee: '₹14,940' },
    { className: 'Class-III', fee: '₹15,030' },
    { className: 'Class-IV', fee: '₹16,650' },
    { className: 'Class-V', fee: '₹17,550' },
    { className: 'Class-VI', fee: '₹18,720' },
    { className: 'Class-VII', fee: '₹20,430' },
    { className: 'Class-VIII', fee: '₹20,475' },
    { className: 'Class-IX', fee: '₹20,700' },
    { className: 'Class-X', fee: '₹22,995' },
    { className: 'Class-XI', fee: '₹28,665' },
    { className: 'Class-XII', fee: '₹33,930' },
  ];

  return (
    <Container className="fee-table-container mt-5">
      <div className='fee-top-div'>
        <img src={require("../assets/ongc-logo1.jpg")} alt="logo" />
      </div>
      <h2 className="table-title">Academic Session Fee Structure 2025-26</h2>

      {/* NOTE: do NOT pass hover or striped props to Table */}
      <Table className="custom-fee-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Total Fee</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.className}</td>
              <td>{row.fee}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Fee;
