import React from 'react'
import Banner from '../components/Banner'
import { Container } from 'react-bootstrap'
import "./ExamScheme.css" // <-- make sure to create/import this file

const ExamScheme = () => {
  return (
    <>
      <Banner
        title="Examination Scheme"
        image={require('../assets/parents-guide-img.jpg')}
        breadcrumbs={[
          { label: 'HOME', link: '/home' },
          { label: 'Examination Scheme', link: '/Examination Scheme' }
        ]}
      />

      <Container fluid className="exam-scheme-fluid">
        <Container className='exam-scheme-container'>
          <h2 className="page-heading exam-heading">Examination Scheme</h2>
          <img
            src={require("../assets/doc/SCHEME-OF-EXAMINATION-2025-2026.jpg")}
            alt="exam-scheme"
            className="exam-scheme-img"
          />
        </Container>
      </Container>
    </>
  )
}

export default ExamScheme
