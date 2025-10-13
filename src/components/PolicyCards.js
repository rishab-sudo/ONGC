import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './PolicyCards.css';

const PolicyCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      img: require("../assets/parents-guide-img.jpg"),
      title: "General Policy",
      desc: "We respect your privacy and ensure your data is protected with industry-leading standards.",
      link: "/general-policy"
    },
    {
      img: require("../assets/parents-guide-img.jpg"),
      title: "Absence Policy",
      desc: "Our refund process is simple and transparent for a hassle-free experience.",
      link: "/absence-policy"
    },
    {
      img: require("../assets/parents-guide-img.jpg"),
      title: "Conviction",
      desc: "Learn more about the rules and policies that guide our platform operations.",
      link: "/conviction-conditions"
    },
  ];

  return (
    <Container fluid className='policy-card-fluid'>
      <Container className='policy-card-container'>
        {cards.map((card, index) => (
          <div className='policy-card' key={index}>
            <div className='policy-card-img'>
              <img src={card.img} alt={card.title} />
            </div>
            <div className='policy-card-content'>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
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
