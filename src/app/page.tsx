import Image from "next/image";
import Button from "src/components/common/elements/Button";
import Heading1 from "src/components/common/elements/Heading1";
import Paragraph from "src/components/common/elements/Paragraph";
import Spacer from "src/components/common/elements/Spacer";
import SubTitle from "src/components/common/elements/SubTitle";
import CircleLayout from "src/components/common/sections/CircleLayout";
import HeroSection from "src/components/common/sections/HeroSection";

const HomePage = async () => {
  // const generalInfo: GeneralInfoType = await sanity.fetch(getGeneralInfo);
  return (
    <>
      <HeroSection
        backgroundImage="/img/home-hero-img.png"
        mobileImage="/img/dark-background.jpeg"
        heading1="Start to achieve"
        heading2="Your Success With"
        heading3="Kode Tech"
        buttonLabel="Contact Us"
        buttonLink="/contact"
      />
      {/* section 2 */}
      <div className="p-0 m-0 bg-[#C5C5C54D]">
        <div className="flex flex-col-reverse lg:flex-row max-w-screen-2xl mx-auto px-[15px] py-[40px] xl:p-14 lg:gap-[50px]">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <Spacer height="h-[20px] md:h-[0px]" />
            <SubTitle text={"WHO WE ARE"} />
            <Spacer height="h-[15px] md:h-[25px] xl:h-[35px]" />
            <Heading1
              text={`Partner with Kode Tech Solutions \nfor digital success.`}
              companyName="Kode Tech"
            />
            <Spacer height="h-[15px] md:h-[15px]" />
            <Paragraph
              color="#4D5053"
              text="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience."
            />
            <Spacer height="h-[20spx] md:h-[25px] xl:h-[35px]" />
            <Button text="Explore More" href="" withArrow={true} />
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Image
              src={"/img/who-we-are-img.png"}
              alt="who we are"
              layout="responsive"
              width={100}
              height={100}
              className="w-3/4 h-auto"
            />
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="p-0 m-0 bg-[#fff]">
        <div className="flex flex-col text-center max-w-screen-2xl mx-auto px-[15px] py-[40px] xl:p-14">
          <Heading1 text={`Our Services`} />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Paragraph
            color="#000"
            text="Explore how we can create your success story through our wide range of capabilities."
          />
          <CircleLayout />
        </div>
      </div>
    </>
  );
};

export default HomePage;
