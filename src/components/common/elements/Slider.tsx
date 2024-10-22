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
import Paragraph from "./Paragraph";
import Image from "next/image";
import Heading2 from "./Heading2";
import Spacer from "./Spacer";
import ButtonSecondary from "./ButtonSecondary";

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

const Slide = () => (
  <>
    <div className="flex p-[10px] lg:p-[50px]">
      <div className="flex flex-col lg:flex-row bg-white rounded-[10px] p-0 lg:p-[20px]">
        <div className="flex w-1/2 p-[10px]">
          <Image
            src={"/img/services-col-img.png"}
            alt="services"
            layout="responsive"
            width={100}
            height={100}
            className="w-3/4 h-auto"
          />
        </div>
        <div className="flex flex-col w-1/2 text-start justify-center items-start">
          <Heading2 color="#000" text="QA Outsource Work" />
          <Spacer height="h-[20px] md:h-[25px] xl:h-[30px]" />
          <Paragraph
            color="#4D5053"
            text="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience."
          />
          <Spacer height="h-[20px] md:h-[25px] xl:h-[30px]" />
          <ButtonSecondary text="Explore More" href="" withArrow={true} />
        </div>
      </div>
    </div>
  </>
);
