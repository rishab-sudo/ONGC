import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./DemoBanner.css";

const DemoBanner = () => {
  return (
    <div className="demoBanner">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="banner-img-wrapper">
            <img src={require("../assets/Banner/Gemini_Generated_b1.png")} alt="banner" className="banner-img" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-img-wrapper">
            <img src={require("../assets/Banner/b2.jpeg")} alt="banner" className="banner-img" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-img-wrapper">
            <img src={require("../assets/Banner/b3.jpeg")} alt="banner" className="banner-img" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-img-wrapper">
            <img src={require("../assets/Banner/b2.jpeg")} alt="banner" className="banner-img" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DemoBanner;
