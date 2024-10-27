import Image from "next/image";
import sanity, { urlFor } from "sanity";
import Button from "src/components/common/elements/Button";
import ButtonSecondary from "src/components/common/elements/ButtonSecondary";
import Heading1 from "src/components/common/elements/Heading1";
import Heading3 from "src/components/common/elements/Heading3";
import Paragraph from "src/components/common/elements/Paragraph";
import Slider from "src/components/common/elements/Slider";
import Spacer from "src/components/common/elements/Spacer";
import SubTitle from "src/components/common/elements/SubTitle";
import CircleLayout from "src/components/common/sections/CircleLayout";
import HeroSection from "src/components/common/sections/HeroSection";
import { getProducts } from "src/services/fetchProducts";
import { ProductsType } from "src/types";

const HomePage = async () => {
  // const generalInfo: GeneralInfoType = await sanity.fetch(getGeneralInfo);
  // const caseStudies: CaseStudiesType = await sanity.fetch(getCaseStudies);
  const products: ProductsType = await sanity.fetch(getProducts);

  // console.log("Case Studies : ",caseStudies)
  console.log("Products : ", products);
  

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
        <div className="flex flex-col-reverse md:flex-row max-w-screen-2xl mx-auto px-[15px] py-[40px] xl:p-14 lg:gap-[50px]">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <Spacer height="h-[20px] md:h-[0px]" />
            <SubTitle text={"WHO WE ARE"} />
            <Spacer height="h-[15px] md:h-[15px] lg:h-[25px] xl:h-[35px]" />
            <Heading1
              text={`Partner with Kode Tech Solutions \nfor digital success.`}
              color="#000"
              companyName="Kode Tech"
            />
            <Spacer height="h-[15px] md:h-[15px] lg:h-[25px]" />
            <Paragraph
              color="#4D5053"
              text="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience."
            />
            <Spacer height="h-[15px] md:h-[15px] lg:h-[25px] xl:h-[35px]" />
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
          <Heading1 text={`Our Services`} color="#000" />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Paragraph
            color="#000"
            text="Explore how we can create your success story through our wide range of capabilities."
          />
          <CircleLayout />
        </div>
      </div>
      {/* section 4 */}
      <section
        className="bg-cover bg-center md:flex items-end justify-center "
        style={{
          backgroundImage: `url('/img/dark-background.jpeg')`,
        }}
      >
        <div className="text-white text-center max-w-screen-2xl mx-auto py-[40px]  px-[10px] 2xl:px-14 w-full h-full ">
          <Heading1 text={`Services Solutions`} color="#fff" />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Paragraph
            color="#fff"
            text="These feedbacks will confirm to you that we have led our clients to success."
          />
          <Spacer height="h-[15px] md:h-[30px]" />
          <Slider />
        </div>
      </section>
      <div className="p-0 m-0 bg-[#fff]">
        <div className="flex flex-col text-start max-w-screen-2xl mx-auto px-[15px] py-[40px] xl:py-14 xl:px-[120px]">
          <div className="container mx-auto px-0 py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* First Column - Show main item if exists */}
  {products.find(product => product.mainItem) && (
    <div className="first-post bg-white p-0 rounded-lg shadow-lg">
      {products
        .filter(product => product.mainItem)
        .map(mainProduct => (
          <>
           <Image
              src={`${urlFor(mainProduct.mainImage.asset)}`}
              alt={mainProduct.title}
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div className="flex flex-col p-[20px]">
              <Heading3 color="#000" text={mainProduct.title} />
              <Paragraph color="#4D5053" text={mainProduct.feturedText} />
              <Spacer height="h-[15px] md:h-[15px] xl:h-[30px]" />
              <ButtonSecondary
                text="Explore More"
                href={`/${mainProduct.slug.current}`}
                withArrow={true}
              />
            </div>
          </>
        ))}
    </div>
  )}

  {/* Second Column - Products without mainItem */}
  <div className="second-column space-y-6">
  {products
      .filter(product => !product.mainItem)
      .slice(0, 3)
      .map((product) => (
        <div
          key={product.slug.current}
          className="post-item bg-white p-0 rounded-lg shadow-lg flex flex-row"
        >
          <Image
            src={`${urlFor(product.mainImage.asset)}`}
            alt={product.title}
            width={300}
            height={200}
            className="rounded-lg w-1/4 h-auto"
          />
          <div className="flex flex-col p-[20px]">
            <Heading3 color="#000" text={product.title} />
            <Paragraph color="#4D5053" text={product.feturedText} />
            <Spacer height="h-[10px]" />
            <ButtonSecondary
              text="Explore More"
              href={`/${product.slug.current}`}
              withArrow={true}
            />
          </div>
        </div>
      ))}
  </div>
</div>


          </div>
        </div>
      </div>

      {/* section 6 */}
      <section
        className="bg-cover bg-center md:flex items-end justify-center "
        style={{
          backgroundImage: `url('/img/dark-background.jpeg')`,
        }}
      >
        <div className="text-white text-center max-w-screen-2xl mx-auto py-[40px]  px-[10px] 2xl:px-14 w-full h-full ">
          <Heading1 text={`Case Studies`} color="#fff" />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Paragraph
            color="#fff"
            text="These feedbacks will confirm to you that we have led our clients to success."
          />
          <Spacer height="h-[15px] md:h-[30px]" />
          <Slider />
        </div>
      </section>
    </>
  );
};

export default HomePage;
