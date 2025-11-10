import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './PolicyCards.css';

const PolicyCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      img: require("../assets/cards/policies-and-procedures.png"),
      title: "General Policy",
      desc: "We foster an atmosphere of trust, respect, and excellence where every student feels valued and supported.",
      link: "/general-policy"
    },
    {
      img: require("../assets/cards/office-software-attendance-management-business-concept-infographics-web-banner-calendar.jpg"),
      title: "Absence Policy",
      desc: "Regular attendance builds responsibility; absences are managed with understanding and fairness.",
      link: "/absence-policy"
    },
    {
      img: require("../assets/cards/177330215-rechtsgerechtigkeit-mit-waage.jpg"),
      title: "Conviction",
      desc: "Discipline focuses on growth and reflection, guiding students toward responsible and positive conduct.",
      link: "/conviction-conditions"
    },
  ];

  return (
    <Container fluid className='policy-card-fluid'>
          <div className="d-flex justify-content-center align-item-center">
            <p className='page-heading'>General Policies</p>
          </div>
      <Container className='policy-card-container'>
        {cards.map((card, index) => (
          <div className='policy-card' key={index}>
            <div className='policy-card-img'>
              <img src={card.img} alt={card.title} />
            </div>
            <div className='policy-card-content'>
              <h4>{card.title}</h4>
              <p className='page-text'>{card.desc}</p>
              <div className='aboutus-btn-div'>
                <button onClick={() => navigate(card.link)}>Know More </button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </Container>
  );
};

export default PolicyCards;
