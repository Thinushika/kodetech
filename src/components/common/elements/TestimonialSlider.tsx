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
import Paragraph from "./Paragraph";

interface SliderData {
  name: string;
  img: string;
  company: string;
  position: string;
  rate: number;
  comment: string;
}

const TestimonialSlider = ({
  testimonialSliderData,
}: {
  testimonialSliderData: SliderData[];
}) => {
  return (
    <Swiper
      id="clientLogoSlider"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      autoplay
      pagination={{ clickable: true }}
      navigation
      slidesPerView={1}
      centeredSlides
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{ padding: "0px 100px !important" }}
    >
      {testimonialSliderData.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center my-[30px] p-[20px]">
            <div className="flex flex-row bg-[#fff] p-[20px] rounded-[30px]">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="flex w-[150px]">
                    <Image
                      src={data.img}
                      alt={data.name}
                      layout="responsive"
                      width={100}
                      height={100}
                      className="w-[150px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col text-start">
                    <p>{data.name}</p>
                    <p>{data.position}</p>
                    <p>{data.company}</p>
                    <p>{data.rate}</p>
                  </div>
                </div>
                <div className="flex text-start">
                  <Paragraph color="#000" text={data.comment} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
