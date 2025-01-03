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
import { FaRegStar, FaStar } from "react-icons/fa";
import Spacer from "./Spacer";
import ParagraphSecondaryStyle from "./ParagraphSecondaryStyle";

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
    <div className="">
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
        autoplay={false}
        loop
        pagination={{ clickable: true }}
        navigation={false}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiperPadding"
      >
        {testimonialSliderData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center my-[30px] p-[20px] lg:px-[100px]">
              <div className="flex flex-row relative w-full bg-[#fff] p-[20px] rounded-[10px] lg:rounded-[30px]">
                <div className="w-[10%] absolute top-4 left-4 sm:relative">
                  <svg
                    width="27"
                    height="25"
                    viewBox="0 0 27 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6922 3.79733C26.6922 3.91936 26.6791 4.04238 26.6335 4.15555C26.4483 4.6146 26.0814 4.87862 25.6235 5.08232C24.4896 5.58686 23.4711 6.2717 22.67 7.25217C21.7534 8.37356 21.2863 9.69617 21.0695 11.1184C20.9965 11.5981 20.9593 12.0836 20.9129 12.5881C20.8968 12.7635 21.0344 12.9158 21.2106 12.9158C22.4178 12.9158 23.6251 12.9145 24.8324 12.9164C25.7457 12.9178 26.2712 13.4529 26.2718 14.3846C26.2731 17.1597 26.2731 19.9346 26.2718 22.7097C26.2712 23.6519 25.7419 24.1901 24.8124 24.1906C22.1026 24.1923 19.3925 24.1923 16.6827 24.1906C15.7508 24.1901 15.2239 23.6547 15.2242 22.7106C15.2247 20.2635 15.2112 17.8165 15.2341 15.3697C15.253 13.3386 15.3854 11.3158 15.8252 9.32457C16.3562 6.92076 17.5634 4.92487 19.3141 3.25544C20.6216 2.00826 22.1215 1.0622 23.758 0.334976C24.4915 0.00907306 25.1851 0.251849 25.5335 0.979902C25.8904 1.72562 26.2271 2.48144 26.5696 3.23442C26.65 3.41125 26.6921 3.60306 26.6922 3.79733Z"
                      fill="#EB131B"
                    />
                    <path
                      d="M5.72826 12.5989C5.72458 12.7744 5.86783 12.916 6.04339 12.916C7.25092 12.916 8.45872 12.9127 9.66625 12.9171C10.5114 12.9201 11.0485 13.4682 11.0496 14.3352C11.0531 17.1464 11.0534 19.9579 11.0493 22.7691C11.0483 23.6309 10.51 24.1869 9.66194 24.1889C6.90792 24.1952 4.15363 24.1946 1.39961 24.1891C0.536433 24.1875 0.00412717 23.6328 0.00412717 22.7523C0.00412717 20.2161 -0.0112433 17.6793 0.0173404 15.1434C0.0383738 13.2807 0.194776 11.4288 0.562859 9.59671C1.05903 7.12683 2.22908 5.05801 4.00936 3.32637C5.35307 2.01945 6.89578 1.03349 8.59733 0.297175C9.30788 -0.0102859 9.98499 0.243225 10.3288 0.948982C10.6804 1.67015 11.0207 2.39766 11.3486 3.13039C11.6852 3.88184 11.4136 4.61099 10.6629 4.95891C9.77304 5.37125 8.92739 5.85074 8.18502 6.50696C7.00877 7.5466 6.35053 8.88792 6.00241 10.4082C5.83906 11.1215 5.74409 11.8437 5.72826 12.5989Z"
                      fill="#EB131B"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex w-full md:w-[120px] justify-center items-center">
                      <Image
                        src={data.img}
                        alt={data.name}
                        layout="cover"
                        width={100}
                        height={100}
                        className="w-[100px] h-[100px] border-black rounded-full border-2"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start px-0 md:px-[20px]">
                      <p className="text-[#222222] font-semibold text-[18px]">
                        {data.name}
                      </p>
                      <p className="text-[#222222] font-medium text-[14px]">
                        {data.position} ({data.company})
                      </p>
                      <div className="text-yellow-500 flex items-center">
                        {[...Array(5)].map((_, index) =>
                          index < data.rate ? (
                            <FaStar
                              key={index}
                              fontSize={22}
                              className="text-yellow-500 pe-1"
                            />
                          ) : (
                            <FaRegStar
                              key={index}
                              fontSize={22}
                              className="text-yellow-500  pe-1"
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex text-center md:text-start flex-col">
                    <Spacer height="h-[15px] md:h-[15px]" />
                    <ParagraphSecondaryStyle
                      lineClamp={true}
                      lineClampNumber={6}
                      color="#000"
                      text={data.comment}
                    />
                  </div>
                </div>
                <div className="w-[10%] absolute top-4 right-4 sm:relative">
                  <svg
                    width="27"
                    height="25"
                    viewBox="0 0 27 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.000214868 20.7373C0.000185314 20.6153 0.0132879 20.4923 0.0589298 20.3791C0.24406 19.9201 0.611009 19.656 1.06885 19.4523C2.20277 18.9478 3.22127 18.263 4.02242 17.2825C4.93899 16.1611 5.40604 14.8385 5.62285 13.4163C5.69588 12.9365 5.7331 12.4511 5.77947 11.9466C5.7956 11.7712 5.65798 11.6188 5.48181 11.6188C4.27455 11.6188 3.06729 11.6202 1.86003 11.6183C0.9467 11.6169 0.421137 11.0818 0.420597 10.1501C0.41925 7.37493 0.41925 4.60007 0.420598 1.82494C0.421138 0.882737 0.950478 0.344611 1.87999 0.34406C4.58979 0.342408 7.29985 0.342409 10.0096 0.344061C10.9416 0.344612 11.4685 0.879984 11.4682 1.82411C11.4677 4.27114 11.4812 6.71817 11.4583 9.16492C11.4394 11.196 11.307 13.2189 10.8672 15.2101C10.3362 17.6139 9.12894 19.6098 7.37832 21.2792C6.07075 22.5264 4.57091 23.4725 2.93435 24.1997C2.20088 24.5256 1.50732 24.2828 1.15892 23.5548C0.801962 22.8091 0.465255 22.0532 0.122803 21.3003C0.0423777 21.1234 0.00026349 20.9316 0.000214868 20.7373Z"
                      fill="#EB131B"
                    />
                    <path
                      d="M20.9641 11.9358C20.9678 11.7602 20.8246 11.6186 20.649 11.6186C19.4415 11.6186 18.2337 11.622 17.0261 11.6175C16.181 11.6145 15.6439 11.0665 15.6428 10.1994C15.6393 7.38823 15.639 4.57677 15.6431 1.76558C15.6441 0.90375 16.1824 0.347733 17.0304 0.345807C19.7845 0.339477 22.5388 0.340026 25.2928 0.345533C26.156 0.347185 26.6883 0.901823 26.6883 1.78237C26.6883 4.31858 26.7036 6.85534 26.675 9.39127C26.654 11.2539 26.4976 13.1059 26.1295 14.938C25.6334 17.4078 24.4633 19.4767 22.683 21.2083C21.3393 22.5152 19.7966 23.5012 18.0951 24.2375C17.3845 24.545 16.7074 24.2914 16.3636 23.5857C16.0119 22.8645 15.6716 22.137 15.3437 21.4043C15.0072 20.6528 15.2787 19.9237 16.0295 19.5758C16.9193 19.1634 17.765 18.6839 18.5074 18.0277C19.6836 16.9881 20.3418 15.6467 20.69 14.1265C20.8533 13.4132 20.9483 12.6909 20.9641 11.9358Z"
                      fill="#EB131B"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
