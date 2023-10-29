"use client";
import "./styles.css";
import Image from "next/image";
///////////////////////////////////
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

///////////////////////////////////
function Carrou(images) {
  console.log("Carrou: " + images.images);
  //<div className="imageGood">
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width={200}
            height={200}
            src="/images/cars/index.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={200}
            height={200}
            src="/images/whatever/index.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={200}
            height={200}
            src="/images/laptops/index.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          ></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carrou;
