import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./Testimonials.css";
import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonialsData = [
  {
    img: require("../assets/testimonial_img.png"),
    name: "John Doe",
    review:
      "This institution has transformed my learning journey. The teachers are supportive, and the environment is inspiring. I highly recommend it to everyone! The teachers are supportive, and the environment is inspiring. I highly recommend it to everyone!",
  },
  {
    img: require("../assets/testimonial_img.png"),
    name: "Sarah Johnson",
    review:
      "A wonderful experience! The staff is very professional and the teaching quality is exceptional. Truly a great place to grow and learn.The teachers are supportive, and the environment is inspiring. I highly recommend it to everyone!",
  },
  {
    img: require("../assets/testimonial_img.png"),
    name: "Michael Smith",
    review:
      "Excellent academic programs and great community! I have learned so much and grown as a person. Highly recommended for all learners.The teachers are supportive, and the environment is inspiring. I highly recommend it to everyone!",
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
              src={require("../assets/testimonial_img.png")}
              alt="Testimonials"
            /> */}
              <img
              src={require("../assets/ongc-test2.png")}
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
