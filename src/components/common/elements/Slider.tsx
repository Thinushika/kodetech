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

const sliderData = [
  {
    img: "/img/services-col-img.png",
    title: "QA Outsource Work 1",
    description:
      "Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience.",
    buttonLink: "/",
  },
  {
    img: "/img/services-col-img.png",
    title: "QA Outsource Work 2",
    description:
      "Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience.",
    buttonLink: "/",
  },
  {
    img: "/img/services-col-img.png",
    title: "QA Outsource Work 3",
    description:
      "Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience.",
    buttonLink: "/",
  },
];

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
        autoplay
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {sliderData.map((sliderData, index) => (
          <SwiperSlide key={index}>
            <div className="flex p-[0px] pb-[40px] md:px-[30px] md:pb-[30px] lg:px-[50px] lg:pb-[50px]">
              <div className="flex flex-col md:flex-row bg-white rounded-[10px] p-[10px] pb-[20px] lg:p-[20px]">
                <div className="flex w-full justify-center items-center md:w-1/2 p-[10px]">
                  <Image
                    src={sliderData.img}
                    alt="services"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="w-3/4 h-auto"
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2 text-center md:text-start justify-center items-center md:items-start">
                  <Heading2 color="#000" text={sliderData.title} />
                  <Spacer height="h-[15px] md:h-[15px] xl:h-[30px]" />
                  <Paragraph color="#4D5053" text={sliderData.description} />
                  <Spacer height="h-[15px] md:h-[15px] xl:h-[30px]" />
                  <ButtonSecondary
                    text="Explore More"
                    href={sliderData.buttonLink}
                    withArrow={true}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
