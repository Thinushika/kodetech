"use client";

import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

interface SliderData {
  img: string;
}

const CaseSlider = ({ sliderData }: { sliderData: SliderData[] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {sliderData.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center p-[0px] pb-[0px] md:px-[30px] md:pb-[0px] lg:px-[50px] lg:pb-[0px]">
            <div className="flex w-4/5 rounded-[10px] p-[10px] pb-[20px] lg:p-[20px]">
              <Image
                src={data.img}
                alt="services"
                layout="responsive"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CaseSlider
