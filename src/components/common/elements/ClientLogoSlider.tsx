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
  name: string;
  img: string;
}

const ClientLogoSlider = ({
  clientLogoSliderData,
}: {
  clientLogoSliderData: SliderData[];
}) => {
  return (
    <>
      <div className="flex lg:flex-none">
        <Swiper
          id="clientLogoSlider"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectFade,
          ]}
          autoplay
          loop
          pagination={false}
          navigation
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ padding: "0px 100px !important" }}
        >
          {clientLogoSliderData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center my-[30px]">
                <div className="flex w-full rounded-[10px] p-[10px] lg:p-[20px] justify-center items-center min-h-[150px] shadow-lg">
                  <Image
                    src={data.img}
                    alt={data.name}
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
      </div>
      <div className="flex-none lg:flex">
        <Swiper
          id="clientLogoSlider"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectFade,
          ]}
          autoplay
          loop
          pagination={false}
          navigation
          slidesPerView={6}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ padding: "0px 100px !important" }}
        >
          {clientLogoSliderData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center my-[30px]">
                <div className="flex w-full rounded-[10px] p-[10px] lg:p-[20px] justify-center items-center min-h-[150px] shadow-lg">
                  <Image
                    src={data.img}
                    alt={data.name}
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
      </div>
    </>
  );
};

export default ClientLogoSlider;
