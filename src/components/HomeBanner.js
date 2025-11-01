import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from "react-router-dom";
import "./HomeBanner.css";

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
                  <div>

                    <button className='banner-btn'> View Our Program</button>
                  </div>
                </div>

                <div className="slide-boxes">
                       <Link to="/apply" className="box">
        Apply Now <MdOutlineArrowOutward className="arrow" style={{ marginTop: "0px" }} />
      </Link>

      <Link to="/AdmissionPolicy" className="box">
        Admission <MdOutlineArrowOutward className="arrow" style={{ marginTop: "0px" }} />
      </Link>

      <Link to="/contact" className="box">
        Contact Us <MdOutlineArrowOutward className="arrow" style={{ marginTop: "0px" }} />
      </Link>
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
