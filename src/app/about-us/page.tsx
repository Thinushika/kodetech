import Image from "next/image";
import React, { Key } from "react";
import sanity, { urlFor } from "sanity";
import ClientLogoSliderAll from "src/components/common/elements/ClientLogoSliderAll";
import FooterUpBlock from "src/components/common/elements/FooterUpBlock";
import Heading1 from "src/components/common/elements/Heading1";
import Paragraph from "src/components/common/elements/Paragraph";
import Spacer from "src/components/common/elements/Spacer";
import TestimonialSlider from "src/components/common/elements/TestimonialSlider";
import HeroSection from "src/components/common/sections/HeroSection";
import { getClientLogos } from "src/services/fetchClientLogos";
import { getCoreValues } from "src/services/fetchCoreValues";
import { getGeneralInfo } from "src/services/fetchGeneralInfo";
import { getTestimonials } from "src/services/fetchTestimonials";
import {
  ClientLogoType,
  CoreValuesType,
  GeneralInfoType,
  TestimonialType,
} from "src/types";

const AboutPage = async () => {
  const generalInfo: GeneralInfoType = await sanity.fetch(getGeneralInfo);
  const testimonials: TestimonialType = await sanity.fetch(getTestimonials);
  const clientLogos: ClientLogoType = await sanity.fetch(getClientLogos);
  const coreValues: CoreValuesType = await sanity.fetch(getCoreValues);

  const clientLogoSliderData = clientLogos.map((item: ClientLogoType) => ({
    name: item.name,
    img: urlFor(item.mainImage).url(),
  }));
  const testimonialSliderData = testimonials.map((item: TestimonialType) => ({
    name: item.name,
    company: item.company,
    position: item.position,
    rate: item.rate,
    comment: item.comment,
    img: urlFor(item.mainImage).url(),
  }));
  const coreValuesArray = coreValues.map((item: CoreValuesType) => ({
    title: item.title,
    description: item.description,
    img: urlFor(item.icon).url(),
  }));
  console.log("coreValues : ", coreValuesArray);
  const numberOfClients = Array.isArray(clientLogos) ? clientLogos.length : 0;

  // console.log(`Number of items: ${numberOfClients}`);

  return (
    <div>
      {/* <h1>About Page</h1> */}
      {/* <GeneralInfo generalInfo={generalInfo} /> */}
      <HeroSection
        backgroundImage="/img/home-hero-img.png"
        mobileImage="/img/dark-background.jpeg"
        heading1="About"
        heading2="Your Success With"
        heading3="Kode Tech"
        buttonLabel="Contact Us"
        buttonLink="/contact"
      />
      {/* project count */}
      <section className="bg-cover bg-center md:flex items-end justify-center bg-white">
        <div className="text-white text-center max-w-screen-2xl mx-auto py-[40px]  px-[10px] 2xl:px-14 w-full h-full ">
          <div className="flex justify-center w-full px-0 md:px-[50px] xl:px-[120px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-black w-full justify-center items-center">
              <div className="col flex flex-col justify-center items-center bg-[#FFF6F6] rounded-lg shadow h-[150px] lg:h-[200px]">
                <h2 className="text-black text-[30px] lg:text-[50px] font-bold mb-0">
                  {generalInfo.sectorCount}
                </h2>
                <p className="text-black text-[14px] lg:text-[18px] font-medium mb-0">
                  Successful Project
                </p>
              </div>
              <div className="col flex flex-col justify-center items-center bg-[#FFF6F6] rounded-lg shadow h-[150px] lg:h-[200px]">
                <h2 className="text-black text-[30px] lg:text-[50px] font-bold mb-0">
                  {numberOfClients}
                </h2>
                <p className="text-black text-[14px] lg:text-[18px] font-medium mb-0">
                  Number Of Clients
                </p>
              </div>
              <div className="col flex flex-col justify-center items-center bg-[#FFF6F6] rounded-lg shadow h-[150px] lg:h-[200px]">
                <h2 className="text-black text-[30px] lg:text-[50px] font-bold mb-0">
                  {generalInfo.sectorCount}
                </h2>
                <p className="text-black text-[14px] lg:text-[18px] font-medium mb-0">
                  Number Of Sectors
                </p>
              </div>
              <div className="col flex flex-col justify-center items-center bg-[#FFF6F6] rounded-lg shadow h-[150px] lg:h-[200px]">
                <h2 className="text-black text-[30px] lg:text-[50px] font-bold mb-0">
                  {generalInfo.sectorCount}
                </h2>
                <p className="text-black text-[14px] lg:text-[18px] font-medium mb-0">
                  Countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* core values */}
      <section className="bg-cover bg-center md:flex items-end justify-center bg-[#EDEDED]">
        <div className="text-white text-center max-w-screen-2xl mx-auto py-[40px]  px-[10px] 2xl:px-14 w-full h-full ">
          <Heading1 text={`Co-Values of Kodetech`} color="#000" />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Paragraph
            color="#000"
            text="Explore how we can create your success story through our wide range of capabilities."
          />
          <Spacer height="h-[15px] md:h-[30px]" />
          <div className="flex justify-center w-full px-0 md:px-[50px] xl:px-[120px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-2 lg:gap-4 text-black w-full justify-center items-center">
              {coreValuesArray.map(
                (
                  item: {
                    title: string;
                    description: string;
                    img: string;
                  },
                  index: Key | null | undefined
                ) => (
                  <div
                    key={index}
                    className="col flex flex-col justify-center items-center bg-[#FFF6F6] rounded-lg shadow px-[10px] md:px-[25px] lg:px-[40px] py-[20px] md:py-[30px] lg:py-[50px] mb-[10px] md:mb-[0px]"
                  >
                    <div
                      className="flex rounded-xl p-[10px]"
                      style={{ border: "solid 1px #FF0000" }}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={45}
                        height={45}
                        layout="contain"
                        className="w-40px h-40px "
                      />
                    </div>
                    <h2 className="text-black text-[22px] lg:text-[28px] font-bold mb-0">
                      {item.title}
                    </h2>
                    <p className="text-[#737373] text-[14px] lg:text-[16px] font-medium mb-0 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      {/* clients */}
      <section className="bg-cover bg-center md:flex items-end justify-center bg-white">
        <div className="text-white text-center max-w-screen-2xl mx-auto py-[40px]  px-[10px] 2xl:px-14 w-full h-full ">
          <Heading1 text={`Our Clients`} color="#000" />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Paragraph
            color="#000"
            text="Thousands of leading brands from all over the world trust our solutions and choose us as a partner."
          />
          <Spacer height="h-[15px] md:h-[30px]" />
          <div className="flex justify-center w-full px-0 md:px-[50px] xl:px-[120px]">
            <ClientLogoSliderAll clientLogoSliderData={clientLogoSliderData} />
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section
        className="bg-cover bg-center md:flex items-end justify-center "
        style={{
          backgroundImage: `url('/img/dark-background.jpeg')`,
        }}
      >
        <div className="text-white text-center max-w-screen-2xl mx-auto py-[40px]  px-[10px] 2xl:px-14 w-full h-full ">
          <Heading1 text={`Testimonials`} color="#fff" />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Paragraph
            color="#fff"
            text="These feedbacks will confirm to you that we have led our clients to success."
          />
          <Spacer height="h-[15px] md:h-[30px]" />
          <TestimonialSlider testimonialSliderData={testimonialSliderData} />
        </div>
      </section>
      <FooterUpBlock />
    </div>
  );
};

export default AboutPage;
