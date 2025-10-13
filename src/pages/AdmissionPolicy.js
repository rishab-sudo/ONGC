// AdmissionPolicy.jsx
import React from 'react'
import Banner from '../components/Banner'
import './AdmissionPolicy.css'
import { Container } from 'react-bootstrap'

const points = [
  {
    heading: 'Registration & Seat Availability',
    text: 'Acceptance of registration does not guarantee admission — admission is subject to seat availability.'
  },
  {
    heading: "Principal's Decision",
    text: 'The decision of the Principal regarding admission is final and binding.'
  },
  {
    heading: 'Medical Consent',
    text: 'If selected, you authorize the school medical officer to administer inoculations (Typhoid & Cholera) to your child from year to year.'
  },
  {
    heading: 'Fee Payment Responsibility',
    text: 'You have taken note of fee details and will remit school fees within due dates without waiting for reminders.'
  },
  {
    heading: 'Withdrawal & Refunds',
    text: 'Withdrawal after remitting a full fee is at the guardian\'s discretion; fees already paid will not be refunded.'
  },
  {
    heading: 'Name & Date of Birth Accuracy',
    text: 'You certify that the Date of Birth and spellings of your child\'s name are correct and will not request changes later.'
  },
  {
    heading: 'Caution Money',
    text: 'If you do not claim the caution money within 3 years after leaving, it may be treated as a donation and you relinquish refund rights.'
  },
  {
    heading: 'Liability for Mishaps',
    text: 'The school is not liable for any injury or mishap to the student inside or outside the premises.'
  },
  {
    heading: 'Transport is Optional',
    text: 'School transport is an optional convenience; the school cannot be held responsible for mishaps related to transport.'
  },
  {
    heading: 'Transport Capacity & Routing',
    text: 'Due to changing preferences and time constraints, vehicles may sometimes carry more students than capacity.'
  },
  {
    heading: 'Accuracy of Information',
    text: 'Providing false or misleading information, or withholding correct information, may disqualify the child from admission or education.'
  },
  {
    heading: 'Fee Schedule Changes',
    text: 'Fee collection schedules are subject to change without prior notice.'
  },
  {
    heading: 'Parent/Guardian Certification',
    text: 'You certify that you are the bonafide parent or guardian of the child.'
  },
  {
    heading: 'Acceptance of School Rules',
    text: 'Having read the rules and procedures in the prospectus, you agree to abide by them; the management\'s decision is final.'
  }
]

const AdmissionPolicy = () => {
  return (
    <div className="admission-page">
      <Banner
        title="About Us"
        image={require('../assets/parents-guide-img.jpg')}
        breadcrumbs={[
          { label: 'HOME', link: '/home' },
          { label: 'About Us', link: '/About Us' }
        ]}
      />

      <Container className="policy-section">
        <div className="policy-container">
          <h2 className="policy-title page-heading">Important Declarations</h2>
          <p className="policy-sub">Please read the following carefully before submitting the application.</p>

          <div className="points-box">
            {points.map((p, idx) => (
              <div className="point-row" key={idx}>
                <div className="point-number">{idx + 1}</div>
                <div className="point-content">
                  <h3 className="point-heading">{p.heading}</h3>
                  <p className="point-text">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </div>
  )
}

export default AdmissionPolicy