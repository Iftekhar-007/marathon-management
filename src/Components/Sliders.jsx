import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

const Sliders = () => {
  return (
    <Swiper
      direction="horizontal"
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide>
        <Slide1></Slide1>
      </SwiperSlide>
      <SwiperSlide>
        <Slide2></Slide2>
      </SwiperSlide>
      <SwiperSlide>
        <Slide3></Slide3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliders;
