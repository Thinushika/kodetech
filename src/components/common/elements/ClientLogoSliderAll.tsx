"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";

interface SliderData {
  name: string;
  img: string;
}

const chunkArray = (array: SliderData[], size: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const ClientLogoSliderAll = ({
  clientLogoSliderData,
}: {
  clientLogoSliderData: SliderData[];
}) => {
  const [itemsPerSlide, setItemsPerSlide] = useState(18);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerSlide(4);
      } else if (width < 1024) {
        setItemsPerSlide(12);
      } else {
        setItemsPerSlide(18);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const slidesData = chunkArray(clientLogoSliderData, itemsPerSlide);

  return (
    <div className="clientLogoSlider All w-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{ width: "100%" }}
      >
        {slidesData.map((slideItems, slideIndex) => (
          <SwiperSlide
            key={slideIndex}
            className="flex justify-center items-center"
          >
            <div className="w-full">
              <div
                className={`grid gap-3 lg:gap-2 xl:gap-3 ${
                  itemsPerSlide === 4
                    ? "grid-cols-2"
                    : itemsPerSlide === 12
                    ? "grid-cols-3 sm:grid-cols-4"
                    : "grid-cols-3 sm:grid-cols-6"
                } mt-[40px]`}
              >
                {slideItems.map((data, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center p-[10px]"
                  >
                    <div className="flex w-full rounded-[10px] p-[10px] lg:p-[20px] justify-center items-center h-[140px] shadow-lg">
                      <Image
                        src={data.img}
                        alt={data.name}
                        layout="responsive"
                        objectFit="cover"
                        width={100}
                        height={100}
                        className="h-[80px] w-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientLogoSliderAll;
