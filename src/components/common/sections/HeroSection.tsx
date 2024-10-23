import Image from "next/image";
import React from "react";
import Button from "../elements/Button";
// import Button from "../elements/Button";

type HeroSectionProps = {
  backgroundImage: string;
  mobileImage: string;
  heading1: string;
  heading2: string;
  heading3: string;
  buttonLabel: string;
  buttonLink: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  mobileImage,
  heading1,
  heading2,
  heading3,
  buttonLabel,
  buttonLink,
}) => {
  return (
    <>
      <section
        className="bg-cover bg-center hidden md:flex items-end justify-center "
        style={{
          backgroundImage: `url('/img/dark-background.jpeg')`,
        }}
      >
        <div className="text-white text-center max-w-screen-2xl mx-auto py-0 pl-4 pr-0 md:pl-8  lg:pl-14 2xl:px-14 w-full h-full ">
          <div className="flex flex-row items-end relative w-full h-full">
            <div className="flex flex-col items-start justify-center text-left md:w-[55%] h-full hero-section-min-height">
              <h3 className="mb-[10px] text-[30px] md:text-[34px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-normal leading-none">
                {heading1}
              </h3>
              <h3 className="mb-[10px] text-[30px] md:text-[34px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-normal leading-none">
                {heading2}
              </h3>
              <h1 className="text-[30px] md:text-[34px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] text-[#EB131B] font-bold leading-none mb-10">
                {heading3}
              </h1>
              <Button text={buttonLabel} href={buttonLink} withArrow={true} />
            </div>
            <div className="relative w-full h-full flex items-end justify-end md:w-[65%]">
              <Image
                src={backgroundImage}
                alt="Home Hero"
                layout="responsive"
                width={1000}
                height={500}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cover bg-center flex md:hidden items-end justify-center ">
        <div className="text-white text-center py-0 px-0 w-full">
          <div className="relative w-full h-full flex items-end justify-end">
            <Image
              src={mobileImage}
              alt="Home Hero"
              layout="responsive"
              width={1000}
              height={500}
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full text-left px-[15px] py-[40px]">
            <h3 className="text-[30px] mb-[5px] text-[#000] font-normal leading-none">
              {heading1}
            </h3>
            <h3 className="text-[30px] mb-[5px] text-[#000] font-normal leading-none">
              {heading2}
            </h3>
            <h1 className="text-[30px] text-[#EB131B] font-bold leading-none mb-[20px]">
              {heading3}
            </h1>
            <Button text={buttonLabel} href={buttonLink} withArrow={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
