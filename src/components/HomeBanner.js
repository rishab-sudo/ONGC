import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { MdOutlineArrowOutward } from 'react-icons/md';
import "./HomeBanner.css";

const slides = [
  {
    img: require("../assets/Banner/ongc-bn-1.jpg"),
    title: "Educve - The Best Place to Invest in your Knowledge",
    desc: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  },
  {
    img: require("../assets/Banner/ongc-bn-2.jpg"),
    title: "Educve - The Best Place to Invest in your Knowledge",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    img: require("../assets/Banner/ongc-bn-3.jpg"),
    title: "Educve - The Best Place to Invest in your Knowledge",
    desc: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
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
                  <div>

                    <button className='banner-btn'> View Our Program</button>
                  </div>
                </div>

                <div className="slide-boxes">
                  <div className="box">Apply Now <MdOutlineArrowOutward className="arrow" style={{ marginTop: "0px" }} /></div>
                  <div className="box">Admission <MdOutlineArrowOutward className="arrow" style={{ marginTop: "0px" }} /></div>
                  <div className="box">Chat With Us <MdOutlineArrowOutward className="arrow" style={{ marginTop: "0px" }} /></div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default HomeBanner;
