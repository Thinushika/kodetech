import React from "react";
import ButtonSecondary from "./ButtonSecondary";
import Spacer from "./Spacer";
import ParagraphSecondaryStyle from "./ParagraphSecondaryStyle";

function FooterUpBlock() {
  return (
    <>
      <div className="p-0 m-0 bg-[#C5C5C54D]">
        <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto px-[15px] py-[40px] xl:p-14 lg:gap-[50px]">
          <div className="w-full md:w-3/5 lg:w-1/2 flex justify-center items-center text-center md:text-start md:ps-[5%] lg:ps-[10%] mb-[20px] md:mb-[0px]">
            <h1 className="text-black">
              <h2 className="text-[#161C2D] font-medium text-[32px] leading-tight">
                Build better AI product fast
              </h2>
              <Spacer height="h-[10px]" />
              <ParagraphSecondaryStyle
                color="#4D5053"
                text="Let our AI simplify the process, allowing you to focus on your vision while we handle the technical details."
              />
            </h1>
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 flex justify-center items-center md:pe-[5%] lg:pe-[10%]">
            <h1 className="text-black">
              <ButtonSecondary text="Contact Us" href={`/`} withArrow={true} />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterUpBlock;
