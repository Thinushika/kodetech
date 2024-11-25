import React from "react";
import FooterUpBlock from "src/components/common/elements/FooterUpBlock";
import Heading1 from "src/components/common/elements/Heading1";
import Paragraph from "src/components/common/elements/Paragraph";
import Spacer from "src/components/common/elements/Spacer";
import HeroSection from "src/components/common/sections/HeroSection";

const ProductsPage = async () => {
  // const generalInfo: GeneralInfoType = await sanity.fetch(getGeneralInfo);
  // console.log("General Info : ", generalInfo)

  return (
    <div>
      {/* <h1>About Page</h1> */}
      {/* <GeneralInfo generalInfo={generalInfo} /> */}
      <HeroSection
        backgroundImage="/img/home-hero-img.png"
        mobileImage="/img/dark-background.jpeg"
        heading1="Products"
        heading2="Your Success With"
        heading3="Kode Tech"
        buttonLabel="Contact Us"
        buttonLink="/contact"
      />
      <section className="bg-cover bg-center md:flex items-end justify-center bg-white">
        <div className="text-white text-center max-w-screen-2xl mx-auto py-[40px]  px-[10px] 2xl:px-14 w-full h-full ">
          <Heading1 text={`Our Products`} color="#000" />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Paragraph
            color="#000"
            text="These feedbacks will confirm to you that we have led our clients to success."
          />
          <Spacer height="h-[15px] md:h-[30px]" />
          {/* <div className="grid grid-cols-3 w-full px-[10px] 2xl:px-14">
            {
              knoledgeCenter.map((item: { title: string; feturedText: string; slug: { current: string; }; mainImage: { asset: SanityImageSource; }; }, index: Key | null | undefined) => (
                <div className="flex col-auto" key={index}>
                  <BlogCard title={item.title} description={item.feturedText} link={item.slug.current} image={`${urlFor(item.mainImage.asset)}`} />
                </div>
              ))
            }
          </div> */}
        </div>
      </section>
      <FooterUpBlock />
    </div>
  );
};

export default ProductsPage;
