import React from 'react';
import HeroSection from 'src/components/common/sections/HeroSection';
// import sanity from 'sanity';
// import GeneralInfo from 'src/components/generalInfo';
// import { getGeneralInfo } from 'src/services/fetchGeneralInfo';
// import { GeneralInfoType } from 'src/types';

const AboutPage = async () => {
  // const generalInfo: GeneralInfoType = await sanity.fetch(getGeneralInfo);
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
    </div>
  );
};

export default AboutPage;
