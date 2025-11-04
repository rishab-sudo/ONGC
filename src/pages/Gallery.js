import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Banner from "../components/Banner";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./Gallery.css";

const Gallery = () => {
  const coCurricularImages = [
    require("../assets/gallery/sports/co-1.jpg"),
    require("../assets/gallery/sports/co-2.jpg"),
    require("../assets/gallery/sports/co-3.jpg"),
    require("../assets/gallery/sports/co-4.jpg"),
    require("../assets/gallery/sports/co-5.jpg"),
    require("../assets/gallery/sports/co-6.jpg"),
    require("../assets/gallery/sports/co-7.jpg"),
    require("../assets/gallery/sports/co-8.jpg"),
    require("../assets/gallery/sports/co-9.jpg"),
    require("../assets/gallery/sports/co-10.jpg"),
    require("../assets/gallery/sports/co-11.jpg"),
    require("../assets/gallery/sports/co-12.jpg"),
    require("../assets/gallery/sports/co-13.jpg"),
    require("../assets/gallery/sports/co-14.jpg"),
  ];

  const festImages = [
    require("../assets/gallery/anualFest/Afn-3.jpg"),
    require("../assets/gallery/anualFest/Afn-4.jpg"),
    require("../assets/gallery/anualFest/Afn-5.jpg"),
    require("../assets/gallery/anualFest/Afn-6.jpg"),
    require("../assets/gallery/anualFest/Afn-7.jpg"),
    require("../assets/gallery/anualFest/Afn-8.jpg"),
    require("../assets/gallery/anualFest/Afn-9.jpg"),
    require("../assets/gallery/anualFest/Afn-10.jpg"),
    require("../assets/gallery/anualFest/Afn-11.jpg"),
    require("../assets/gallery/anualFest/Afn-12.jpg"),
    require("../assets/gallery/anualFest/Afn-13.jpg"),
    require("../assets/gallery/anualFest/Afn-14.jpg"),
    require("../assets/gallery/anualFest/Afn-15.jpg"),
    require("../assets/gallery/anualFest/Afn-16.jpg"),
    require("../assets/gallery/anualFest/Afn-17.jpg"),
    require("../assets/gallery/anualFest/Afn-18.jpg"),
    require("../assets/gallery/anualFest/Afn-19.jpg"),
    require("../assets/gallery/anualFest/Afn-20.jpg"),
    require("../assets/gallery/anualFest/Afn-21.jpg"),
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = (images) =>
    setSelectedIndex((prev) => (prev + 1) % images.length);
  const handlePrev = (images) =>
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const renderGallery = (title, images, id) => (
    <section className="modern-gallery-section" key={id}>
      <Container fluid>
        <div className="gallery-header">
          <h2>{title}</h2>
        </div>

     <Swiper
  modules={[Autoplay, Navigation]}
  className="straight-gallery-swiper"
  centeredSlides={true}
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
  breakpoints={{
    0: { slidesPerView: 1 },       // 📱 Mobile
    768: { slidesPerView: 1 },     // 💻 Tablet / Small Laptop
    1280: { slidesPerView: 3 },    // 🖥️ Large Screens
  }}
>
          {images.map((img, index) => (
            <SwiperSlide key={index} className="straight-slide">
              <img
              className="slider-img"
                src={img}
                alt={`${title} ${index + 1}`}
                onClick={() => {
                  setSelectedIndex(index);
                  setActiveGallery(id);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Fullscreen Popup */}
        {selectedIndex !== null && activeGallery === id && (
          <div
            className="image-popup"
            onClick={() => {
              setSelectedIndex(null);
              setActiveGallery(null);
            }}
          >
            {/* stop propagation so clicking on image doesn’t close popup */}
            <div onClick={(e) => e.stopPropagation()}>
              {!isMobile && (
                <span
                  className="close-btn"
                  onClick={() => {
                    setSelectedIndex(null);
                    setActiveGallery(null);
                  }}
                >
                  ✕
                </span>
              )}
              {!isMobile && (
                <button
                  className="nav-btn left"
                  onClick={() => handlePrev(images)}
                >
                  ‹
                </button>
              )}
              <img
                src={images[selectedIndex]}
                alt="Full View"
                className="popup-img"
              />
              {!isMobile && (
                <button
                  className="nav-btn right"
                  onClick={() => handleNext(images)}
                >
                  ›
                </button>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );

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

      {renderGallery("Co-Curricular Activities", coCurricularImages, "co-curricular")}
      {renderGallery("College Fest", festImages, "fest")}
    </>
  );
};

export default Gallery;
