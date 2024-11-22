import React from "react";
import sanity, { urlFor } from "sanity";
import ClientLogoSliderAll from "src/components/common/elements/ClientLogoSliderAll";
import Heading1 from "src/components/common/elements/Heading1";
import Paragraph from "src/components/common/elements/Paragraph";
import Spacer from "src/components/common/elements/Spacer";
import TestimonialSlider from "src/components/common/elements/TestimonialSlider";
import HeroSection from "src/components/common/sections/HeroSection";
import { getClientLogos } from "src/services/fetchClientLogos";
import { getTestimonials } from "src/services/fetchTestimonials";
import { ClientLogoType, TestimonialType } from "src/types";
// import sanity from 'sanity';
// import GeneralInfo from 'src/components/generalInfo';
// import { getGeneralInfo } from 'src/services/fetchGeneralInfo';
// import { GeneralInfoType } from 'src/types';

const AboutPage = async () => {
  // const generalInfo: GeneralInfoType = await sanity.fetch(getGeneralInfo);
  const testimonials: TestimonialType = await sanity.fetch(getTestimonials);
  const clientLogos: ClientLogoType = await sanity.fetch(getClientLogos);

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
  // console.log("General Info : ", generalInfo)

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
    </div>
  );
};

export default AboutPage;
