import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (

    <>
      <div className="text-center">
        <h1 className="lg:text-5xl text-3xl">Discounts On Our Exclusives!</h1>
        <h1 className="lg:text-2xl">Various courses on across site wide can be done more cost-effectively throughout the month of July on the occasion of Eid-Al-Adha!</h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div className="">

          <SwiperSlide>
            <img src="https://i.ibb.co/Qm325MC/30.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/XJW4d0t/24.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Zhp2vbP/25.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Qm325MC/30.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Qm325MC/30.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Qm325MC/30.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Zhp2vbP/25.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Qm325MC/30.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/XJW4d0t/24.png" />
          </SwiperSlide>
        </div>

      </Swiper>
    </>
  );
}
