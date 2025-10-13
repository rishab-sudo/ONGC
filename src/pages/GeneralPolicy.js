import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import './GeneralPolicy.css';

const generalPoints = [
  "Students who have been sick should bring a medical certificate from their doctor on joining school. A copy of the certificate is to be submitted and signed by the school clinic for a follow-up.",
  "Parents should fill up the 'Record for Non-Attendance' for each day when the student is absent from school, stating the reasons for absence.",
  "Students who require medical attention during school hours may be sent by the teacher to the school clinic with a slip.",
  "Anyone who has been absent on the previous day will not be admitted to the class without a letter from the parent, addressed to the class teacher, stating the reason for the absence.",
  "Leave can be granted on special grounds.",
  "All students returning to school after suffering from an infectious or contagious disease should produce a doctor’s certificate permitting them to do so.",
  {
    main: "Students suffering from the following diseases must observe the prescribed period of quarantine before returning to class:",
    sub: [
      "Chicken Pox — Till complete falling of the scabs.",
      "Cholera — Till the child is completely well.",
      "Mumps — Until the swelling has gone; about one month.",
      "Measles — Two weeks after the rash disappears.",
      "Whooping Cough — Six weeks.",
      "Jaundice — Six weeks after recovery."
    ]
  },
  "Repeated absence without leave or unexplained absence for more than six consecutive days renders the student liable to have his/her name struck off the rolls. Re-admission may be granted only on payment of fresh admission fees.",
  "All students are expected to attend school on the opening day after each of the vacations. Those absent without leave will be fined at the rate of Rs. 5 per day. Those absent because of sickness must present a medical certificate before they may be admitted to the class.",
  "Absence for more than three days immediately after a vacation renders the student liable to pay a fine of Rs. 100 per day. After six days, the name will be struck off the rolls.",
  "It is compulsory for the students to complete 80% of their attendance in the year to make them eligible to sit for their final examination.",
  "The attendance percentage, however, could be relaxed on medical grounds; but such students will not be eligible to sign the roll of honour or receive any prizes.",
  "Students who do not take their First Term and Mid Term examination will have to pay a fine as decided by the Principal at the time of examination and take a re-test. Such students are not eligible for the school badges, blazers, or any other awards.",
  "Students absenting themselves from Tuesday tests will have to pay a fine as decided by the Principal."
];

const GeneralPolicy = () => {
  const [viewMore, setViewMore] = useState(false);
  const visibleCount = 7; // number of items visible initially

  return (
    <>
        <Banner
          title="General Policy"
          image={require("../assets/parents-guide-img.jpg")}
          breadcrumbs={[
            { label: "HOME", link: "/home" },
            { label: "General Policy", link: "/GeneralPolicy" },
          ]}
        />
    <Container fluid className="general-policy-fluid g-0">
      <Container className="general-policy">
        <div className="general-policy-container">
          <div className="general-policy-box scrollable-box">
            <div className="d-flex justify-content-center align-items-center">
              <p className="page-heading">General School Policy</p>
            </div>

            <ul>
              {generalPoints
                .slice(0, viewMore ? generalPoints.length : visibleCount)
                .map((point, index) =>
                  typeof point === 'string' ? (
                    <li key={index}>
                      <span className="circle-number">{index + 1}</span>
                      {point}
                    </li>
                  ) : (
                    <li key={index}>
                      <span className="circle-number">{index + 1}</span>
                      {point.main}
                      <ul className="sub-points">
                        {point.sub.map((subItem, subIndex) => (
                          <li key={subIndex}>{subItem}</li>
                        ))}
                      </ul>
                    </li>
                  )
                )}
            </ul>

            {!viewMore && generalPoints.length > visibleCount && (
              <button
                className="view-moree-btn"
                onClick={() => setViewMore(true)}
              >
                View More
              </button>
            )}
          </div>
        </div>
      </Container>
    </Container>
    </>
  );
};

export default GeneralPolicy;
