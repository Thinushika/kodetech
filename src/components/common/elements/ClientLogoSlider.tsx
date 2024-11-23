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
    <div className="flex justify-center items-center lg:w-4/5 clientLogoSlider">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        pagination={false}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {clientLogoSliderData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center my-[20px]">
              <div className="flex w-full max-w-[200px] bg-white rounded-[10px] p-[10px] md:p-[15px] lg:p-[20px] justify-center items-center h-[120px] md:h-[140px] lg:h-[160px] shadow-lg">
                <Image
                  src={data.img}
                  alt={data.name}
                  layout="intrinsic"
                  objectFit="contain"
                  width={100}
                  height={100}
                  className="h-auto w-auto"
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
