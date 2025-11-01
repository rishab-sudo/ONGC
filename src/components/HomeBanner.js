import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./HomeBanner.css";
import BannerButtons from './BannerButtons';

const slides = [
  {
    img: require("../assets/Banner/ongc-bn-1.jpg"),
    title: "Nurturing Minds, Shaping Futures",
    desc: "A CBSE-affiliated institution committed to academic excellence and holistic development from Kindergarten to Class 12."
  },
  {
    img: require("../assets/Banner/ongc-bn-2.jpg"),
    title: "Empowering Students Through Quality Education",
    desc: "We inspire curiosity, creativity, and character — preparing students to succeed in a rapidly changing world."
  },
  {
    img: require("../assets/Banner/ongc-bn-3.jpg"),
    title: "Where Learning Meets Values",
    desc: "Beyond textbooks and classrooms, we focus on discipline, innovation, and integrity to build responsible global citizens."
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
