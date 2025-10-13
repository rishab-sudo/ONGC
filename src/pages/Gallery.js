import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const image = require("../assets/campur_life_1.jpg");

  const images = Array.from({ length: 10 }).map(() => image);

  return (
    <section className="modern-gallery-section">
      <Container fluid>
        <div className="gallery-header">
          <h2>Campus Life Moments</h2>
          <p>Capturing the spirit, energy, and joy of our students</p>
        </div>

        <Swiper
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="straight-gallery-swiper"
          speed={800}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="straight-slide">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                onClick={() => setSelectedImage(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Fullscreen popup */}
        {selectedImage && (
          <div className="image-popup" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Full View" className="popup-img" />
          </div>
        )}
      </Container>
    </section>
  );
};

export default Gallery;
