"use client";

import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

interface SliderData {
  name: string;
  img: string;
}

const ClientLogoSlider = ({
  clientLogoSliderData,
}: {
  clientLogoSliderData: SliderData[];
}) => {
  return (
    <div className="flex justify-center items-center lg:w-4/5 ">
      <Swiper
        id="clientLogoSlider"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={false}
        loop
        pagination={false}
        navigation
        centeredSlides={false}
        spaceBetween={0} 
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile
          },
          640: {
            slidesPerView: 3, // Small tablets
          },
          768: {
            slidesPerView: 5, // Tablets
          },
          1024: {
            slidesPerView: 6, // Desktop
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="px-[20px]"
      >
        {clientLogoSliderData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center my-[30px] p-[10px]">
              <div className="flex w-full rounded-[10px] p-[10px] lg:p-[20px] justify-center items-center h-[140px] shadow-lg">
              <Image
                  src={data.img}
                  alt={data.name}
                  layout="responsive"
                  width={100}
                  height={100}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientLogoSlider;


