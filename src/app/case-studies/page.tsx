import React from "react";
import sanity from "sanity";
import FooterUpBlock from "src/components/common/elements/FooterUpBlock";
import Heading1 from "src/components/common/elements/Heading1";
import Paragraph from "src/components/common/elements/Paragraph";
import Spacer from "src/components/common/elements/Spacer";
import HeroSection from "src/components/common/sections/HeroSection";
import { getCaseStudies } from "src/services/fetchCaseStudies";
import { CaseStudyType } from "src/types";

const ProductsPage = async () => {
  const caseStudies: CaseStudyType = await sanity.fetch(getCaseStudies);
  console.log("caseStudies Info : ", caseStudies)

  return (
    <div>
      <HeroSection
        backgroundImage="/img/home-hero-img.png"
        mobileImage="/img/dark-background.jpeg"
        heading1="Case Studies"
        heading2="Your Success With"
        heading3="Kode Tech"
        buttonLabel="Contact Us"
        buttonLink="/contact"
      />
      <section className="bg-cover bg-center md:flex items-end justify-center bg-white">
        <div className="text-white text-center max-w-screen-2xl mx-auto py-[40px]  px-[10px] 2xl:px-14 w-full h-full ">
          <Heading1 text={`Case Studies`} color="#000" />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Paragraph
            color="#000"
            text="We always successfully take our clients to their goals through our projects."
          />
          <Spacer height="h-[15px] md:h-[30px]" />
        </div>
      </section>
      <FooterUpBlock />
    </div>
  );
};

export default ProductsPage;
