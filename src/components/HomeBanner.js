import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./HomeBanner.css";
import BannerButtons from './BannerButtons';

const slides = [
  {
    img: require("../assets/Banner/ongc-bn-1.jpg"),
    title: " Empowering Minds, Bright Futures",
    desc: " Learning with purpose and heart, we nurture confidence, curiosity, and compassion in every child."
  },
  {
    img: require("../assets/Banner/ongc-bn-2.jpg"),
    title: "From Curiosity to Capability",
    desc: "Guiding young learners to explore, innovate, and grow beyond classrooms into confident global citizens."
  },
  {
    img: require("../assets/Banner/ongc-bn-3.jpg"),
    title: "From Knowledge to Kindness",
    desc: "Empowering every student to dream, discover, and thrive with integrity in a changing world."
  },
];

const HomeBanner = () => {
  return (
    <Container fluid className="g-0">
      <Carousel slide interval={3500} pause={false} indicators={false}>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx} className="custom-carousel-item">

            {/* ✅ Image */}
            <img className="homeBanner-img" src={slide.img} alt={`Slide ${idx + 1}`} />

            {/* ✅ Black Overlay */}
            <div className="banner-overlay"></div>

            {/* ✅ Caption */}
            <Carousel.Caption className="slide-content">
              <div className="caption-inner">
                <div className="slide-text">
                  <h3 className='homebanner-title'>{slide.title}</h3>
                  <p>{slide.desc}</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <BannerButtons/>
    </Container>
  );
};

export default HomeBanner;
