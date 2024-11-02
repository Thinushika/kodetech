"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
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
    <div className="hidden lg:flex justify-center items-center lg:w-4/5 clientLogoSlider">
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={false}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
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
