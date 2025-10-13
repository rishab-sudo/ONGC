import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Banner from "../components/Banner";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    require("../assets/campur_life_1.jpg"),
    require("../assets/ongc-school-img.jpg"),
    require("../assets/testimonial_img.png"),
    require("../assets/campur_life_1.jpg"),
    require("../assets/ongc-school-img.jpg"),
    require("../assets/testimonial_img.png"),
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => setSelectedIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <>
        <Banner
            title="Gallery"
            image={require("../assets/parents-guide-img.jpg")}
            breadcrumbs={[
              { label: "Gallery", link: "/Gallery" },
              { label: "Gallery", link: "/Gallery" },
            ]}
          />
  
    <section className="modern-gallery-section">
      <Container fluid>
        <div className="gallery-header">
          <h2>Campus Life Moments</h2>
          <p>Capturing the spirit, energy, and joy of our students</p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          className="straight-gallery-swiper"
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          loopedSlides={images.length}
          spaceBetween={0}
          speed={1500}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="straight-slide">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                onClick={() => setSelectedIndex(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Popup full view */}
        {selectedIndex !== null && (
          <div className="image-popup">
            <span className="close-btn" onClick={() => setSelectedIndex(null)}>
              ✕
            </span>
            <button className="nav-btn left" onClick={handlePrev}>
              ‹
            </button>
            <img
              src={images[selectedIndex]}
              alt="Full View"
              className="popup-img"
            />
            <button className="nav-btn right" onClick={handleNext}>
              ›
            </button>
          </div>
        )}
      </Container>
    </section>
      </>
  );
};

export default Gallery;
