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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            src={require("../assets/Banner/new-ongc-banner1.jpg")}
            alt="banner"
            className="demo-banner-img"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={require("../assets/Banner/new-ongc-banner2.jpg")}
            alt="banner"
            className="demo-banner-img"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
           src={require("../assets/Banner/new-ongc-banner3.jpg")}
            alt="banner"
            className="demo-banner-img"
          />
        </SwiperSlide>
            <SwiperSlide>
          <img
           src={require("../assets/Banner/new-ongc-banner2.jpg")}
            alt="banner"
            className="demo-banner-img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DemoBanner;
