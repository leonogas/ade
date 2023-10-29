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
function Carrou({ images }) {
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative" style={{ minHeight: "800px" }}>
              <Image
                fill
                src={image}
                className="rounded-lg p-3 w-full h-full object-cover"
                alt="..."
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carrou;
