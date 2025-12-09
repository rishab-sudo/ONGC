import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./Testimonials.css";
import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonialsData = [
  {
    img: require("../assets/campus/parents.jpeg"),
    name: "Vikramaditya Sharma",
    review:
      "This is the most  progressive school that is getting perfection in the quality education and cultivating the best citizens for our country.",
  },
  {
    img: require("../assets/campus/parents.jpeg"),
    name: "Prerit Srivastava",
    review:
      "This institution is a framework of Quality Education and Ethical Values that a child need to adopt.Highly Recommended",
  },
  {
    img: require("../assets/campus/parents.jpeg"),
    name: "Payal Agarwal",
    review:
      "This school provides a opportunity to individual to grow in their own way. Providing them the best educationin a very students friendly enviornment.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Container fluid className="test-fluid">
      <Container className="test-container">
        <div className="test-top-sec">
          <h1 className="test-title page-heading">Guardian Testimonials</h1>
          <p className="test-desc">
          Our parents and students are the heart of ONGC Community School. 
          Their stories reflect our dedication to quality education, strong values, and holistic growth shaping confident learners and bright futures every day.
          </p>
        </div>

        <div className="test-bottom-sec">
          {/* Left Image */}
          <div className="test-left-img-div">
            {/* <img
              src={require("../assets/campus/parents.jpeg"),)}
              alt="Testimonials"
            /> */}
              <img
              className="test-left-img"
              src={require("../assets/campus/parents.jpeg")}
              alt="Testimonials"
            />
          </div>

          {/* Right Slider */}
          <div className="test-right-box-div">
            <Slider {...settings}>
              {testimonialsData.map((t, index) => (
                <div key={index} className="test-box">
                  <div className="test-box-top">
                    <div className="test-profile-sec">
                      <img
                        className="test-profile"
                        src={t.img}
                        alt={t.name}
                      />
                      <div className="test-vert-line"></div>
                      <h5 className="test-name">{t.name}</h5>
                    </div>
                    <FaQuoteRight className="test-quote-icon" />
                  </div>

                  <p className="test-review">{t.review}</p>

                  <div className="test-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <span> 4.5 / 5</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Testimonials;
