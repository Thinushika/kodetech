/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import sanity, { urlFor } from "sanity";
import FooterUpBlock from "src/components/common/elements/FooterUpBlock";
import Heading1 from "src/components/common/elements/Heading1";
import Heading3 from "src/components/common/elements/Heading3";
import Paragraph from "src/components/common/elements/Paragraph";
import Spacer from "src/components/common/elements/Spacer";
import HeroSection from "src/components/common/sections/HeroSection";
import { getServices } from "src/services/fetchOurServices";
import { ServiceType } from "src/types";

const ProductsPage = async () => {
  const ourService: ServiceType = await sanity.fetch(getServices);
  console.log("ourService Info : ", ourService)


  return (
    <div>
      <HeroSection
        backgroundImage="/img/home-hero-img.png"
        mobileImage="/img/dark-background.jpeg"
        heading1="Our Services"
        heading2="Your Success With"
        heading3="Kode Tech"
        buttonLabel="Contact Us"
        buttonLink="/contact"
      />
      <section className="bg-cover bg-center md:flex flex-col items-end justify-center bg-white">
        <div className="text-white text-center max-w-screen-2xl mx-auto py-[40px]  px-[10px] 2xl:px-14 w-full h-full ">
          <Heading1 text={`Our Services`} color="#000" />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Paragraph
            color="#000"
            text="Explore how we can create your success story through our wide range of capabilities."
          />
          <Spacer height="h-[15px] md:h-[30px]" />
        </div>
        <div className="text-white text-center max-w-screen-2xl mx-auto pb-[40px]  px-[10px] 2xl:px-14 w-full h-full ">
          <div className="d-flex flex-col lg:flex-row">
            {ourService.map((service: any, index: number) => (
              <div key={index} className="flex flex-col lg:flex-row shadow p-0 rounded-lg mb-[25px]">
                {index % 2 === 0 ? (
                   <>
                   <div className="w-full lg:w-1/2 flex justify-center items-center">
                     {service.featuredImage ? (
                       <Image
                         src={urlFor(service.featuredImage).url()}
                         alt={service.serviceName || `Service Image ${index + 1}`}
                         layout="responsive"
                         width={100}
                         height={100}
                         className="rounded-lg lg:rounded-s-lg"
                       />
                     ) : (
                       <p>No image available for {service.serviceName || `Service ${index + 1}`}</p>
                     )}
                   </div>
                   <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-start p-[10px] lg:p-[20px] lg:ps-[50px]">
                     <Heading3 color="#000" text={service.serviceName} />
                     <Spacer height="h-[15px] md:h-[15px]" />
                     <Paragraph color="#000" text={service.feturedText} />
                     <Spacer height="h-[20px] md:h-[30px]" />
                     <Heading3 color="#EB131B" text="Our Tech Stack" />
                     <Spacer height="h-[15px] md:h-[15px]" />
                     <div className="flex flex-wrap">
                       {service.techStack.map((tech: any, techIndex: number) => (
                         <div key={techIndex} className="flex items-center justify-center p-2 shadow rounded me-5 mb-2">
                           {tech.icon ? (
                             <Image
                               src={urlFor(tech.icon).url()}
                               alt={tech.name || `Tech Icon ${techIndex + 1}`}
                               layout="fixed"
                               width={70}
                               height={70}
                               className="rounded h-[30px] w-auto"
                             />
                           ) : (
                             <p>{tech.name || "No Icon"}</p>
                           )}
                         </div>
                       ))}
                     </div>
                   </div>
                 </>
                ) : (
                 
                  <div className="flex flex-col-reverse flg:flex-row">
                  <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-start  p-[10px] lg:p-[20px lg:ps-[50px]">
                    <Heading3 color="#000" text={service.serviceName} />
                    <Spacer height="h-[15px] md:h-[15px]" />
                    <Paragraph color="#000" text={service.feturedText} />
                    <Spacer height="h-[20px] md:h-[30px]" />
                    <Heading3 color="#EB131B" text="Our Tech Stack" />
                    <Spacer height="h-[15px] md:h-[15px]" />
                    <div className="flex flex-wrap">
                      {service.techStack.map((tech: any, techIndex: number) => (
                        <div key={techIndex} className="flex items-center justify-center p-2 shadow rounded me-5">
                          {tech.icon ? (
                            <Image
                              src={urlFor(tech.icon).url()}
                              alt={tech.name || `Tech Icon ${techIndex + 1}`}
                              layout="fixed"
                              width={70}
                              height={70}
                              className="rounded h-[30px] w-auto"
                            />
                          ) : (
                            <p>{tech.name || "No Icon"}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 flex justify-center items-center">
                    {service.featuredImage ? (
                      <Image
                        src={urlFor(service.featuredImage).url()}
                        alt={service.serviceName || `Service Image ${index + 1}`}
                        layout="responsive"
                        width={100}
                        height={100}
                        className="rounded-lg lg:rounded-e-lg"
                      />
                    ) : (
                      <p>No image available for {service.serviceName || `Service ${index + 1}`}</p>
                    )}
                  </div>
                </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
      <FooterUpBlock />
    </div>
  );
};

export default ProductsPage;
