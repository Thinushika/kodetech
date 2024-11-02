import Image from "next/image";
import sanity, { urlFor } from "sanity";
import Button from "src/components/common/elements/Button";
import ButtonSecondary from "src/components/common/elements/ButtonSecondary";
import CaseSlider from "src/components/common/elements/CaseSlider";
import ClientLogoSlider from "src/components/common/elements/ClientLogoSlider";
import Heading1 from "src/components/common/elements/Heading1";
import Heading3 from "src/components/common/elements/Heading3";
import Paragraph from "src/components/common/elements/Paragraph";
import ParagraphSecondaryStyle from "src/components/common/elements/ParagraphSecondaryStyle";
import Slider from "src/components/common/elements/Slider";
import Spacer from "src/components/common/elements/Spacer";
import SubTitle from "src/components/common/elements/SubTitle";
import TestimonialSlider from "src/components/common/elements/TestimonialSlider";
import CircleLayout from "src/components/common/sections/CircleLayout";
import HeroSection from "src/components/common/sections/HeroSection";
import { getCaseStudies } from "src/services/fetchCaseStudies";
import { getClientLogos } from "src/services/fetchClientLogos";
import { getKnoledgeCenter } from "src/services/fetchKnowledgeCenter";
import { getProducts } from "src/services/fetchProducts";
import { getTestimonials } from "src/services/fetchTestimonials";
import {
  CaseStudiesType,
  ClientLogoType,
  KnoledgeCenterType,
  ProductsType,
  TestimonialType,
} from "src/types";

const HomePage = async () => {
  const caseStudies: CaseStudiesType[] = await sanity.fetch(getCaseStudies);
  const products: ProductsType = await sanity.fetch(getProducts);
  const testimonials: TestimonialType = await sanity.fetch(getTestimonials);
  const clientLogos: ClientLogoType = await sanity.fetch(getClientLogos);
  const knoledgeCenter: KnoledgeCenterType = await sanity.fetch(
    getKnoledgeCenter
  );

  const sliderData = caseStudies.map((study) => ({
    img: urlFor(study.mainImage).url(),
  }));

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

  // console.log("Products : ", products);
  // console.log("Case Studies : ",caseStudies)
  // console.log("Client logos : ",clientLogoSliderData)
  // console.log("Testimonials : ",testimonialSliderData)
  console.log("knoledgeCenter : ", knoledgeCenter);

  return (
    <>
      {/* section 1 - hero */}
      <HeroSection
        backgroundImage="/img/home-hero-img.png"
        mobileImage="/img/dark-background.jpeg"
        heading1="Start to achieve"
        heading2="Your Success With"
        heading3="Kode Tech"
        buttonLabel="Contact Us"
        buttonLink="/contact"
      />
      {/* section 2 - who we are */}
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
      {/* section 3 - services */}
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
      {/* section 4 - service solutions */}
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

      {/* section 5 - products */}
      <div className="p-0 m-0 bg-[#fff]">
        <div className="flex flex-col text-start max-w-screen-2xl mx-auto px-[15px] md:px-[25px] py-[40px] xl:py-[120px] xl:px-[100px]">
          <div className="container mx-auto px-0 py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* First Column - Show main item if exists */}
              {products.find((product) => product.mainItem) && (
                <>
                  {/* Desktop View for the Main Item */}
                  <div className="first-post bg-white p-0 rounded-lg shadow-lg hidden lg:block">
                    {products
                      .filter((product) => product.mainItem)
                      .map((mainProduct) => (
                        <div
                          key={mainProduct.slug.current}
                          className="flex flex-col xl:flex-col"
                        >
                          <div className="flex w-full xl:w-full">
                            <Image
                              src={`${urlFor(mainProduct.mainImage.asset)}`}
                              alt={mainProduct.title}
                              width={600}
                              height={400}
                              layout="responsive"
                              className="rounded-lg w-full"
                            />
                          </div>
                          <div className="flex flex-col p-[20px] xl:px-[40px]">
                            <Heading3 color="#000" text={mainProduct.title} />
                            <Spacer height="h-[15px]" />
                            <ParagraphSecondaryStyle
                              color="#4D5053"
                              text={mainProduct.feturedText}
                            />
                            <Spacer height="h-[15px]" />
                            <ButtonSecondary
                              text="Learn More"
                              href={`/${mainProduct.slug.current}`}
                              withArrow={true}
                            />
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Mobile and Tablet View for the Main Item */}
                  <div className="post-item bg-white p-0 rounded-lg shadow-lg flex flex-col md:flex-row lg:hidden">
                    {products
                      .filter((product) => product.mainItem)
                      .map((mainProduct) => (
                        <div
                          key={mainProduct.slug.current}
                          className="flex flex-col md:flex-row md:items-center"
                        >
                          <div className="flex w-full md:w-[40%]">
                            <Image
                              src={`${urlFor(mainProduct.mainImage.asset)}`}
                              alt={mainProduct.title}
                              width={215}
                              height={157}
                              layout="responsive"
                              className="rounded-lg object-cover w-full h-full"
                            />
                          </div>
                          <div
                            className="flex flex-col p-[20px] space-y-1 w-full md:w-[60%]"
                          >
                            <Heading3 color="#000" text={mainProduct.title} />
                            <Spacer height="h-[2px]" />
                            <ParagraphSecondaryStyle
                              color="#4D5053"
                              text={mainProduct.feturedText}
                              lineClamp={true}
                            />
                            <Spacer height="h-[2px]" />
                            <ButtonSecondary
                              text="Learn More"
                              href={`/${mainProduct.slug.current}`}
                              withArrow={true}
                              showBorder={false}
                              padding={false}
                              bgColor={false}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              )}

              {/* Second Column - Products without mainItem */}
              <div className="second-column space-y-6">
                {products
                  .filter((product) => !product.mainItem)
                  .slice(0, 3)
                  .map((product) => (
                    <div
                      key={product.slug.current}
                      className="post-item bg-white p-0 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center"
                    >
                      <div className="flex col-span-2  w-full md:w-[40%]">
                        <Image
                          src={`${urlFor(product.mainImage.asset)}`}
                          alt={product.title}
                          width={215}
                          height={157}
                          layout="responsive"
                          className="rounded-lg object-cover w-full h-full"
                        />
                      </div>
                      <div
                        className="flex flex-col col-span-3 p-[20px] space-y-1  w-full md:w-[60%]"
                      >
                        <Heading3 color="#000" text={product.title} />
                        <Spacer height="h-[2px]" />
                        <ParagraphSecondaryStyle
                          color="#4D5053"
                          text={product.feturedText}
                          lineClamp={true}
                        />
                        <Spacer height="h-[2px]" />
                        <ButtonSecondary
                          text="Learn More"
                          href={`/${product.slug.current}`}
                          withArrow={true}
                          showBorder={false}
                          padding={false}
                          bgColor={false}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex w-full justify-center items-center pt-[30px] md:pt-[40px] xl:pt-[50px]">
            <Button text="See All" href="" withArrow={true} />
            </div>
          </div>
        </div>
      </div>

      {/* section 6 - case studies */}
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
          <CaseSlider sliderData={sliderData} />
        </div>
      </section>

      {/* section 7 - clients */}
      <section className="bg-cover bg-center md:flex items-end justify-center bg-white">
        <div className="text-white text-center max-w-screen-2xl mx-auto py-[40px]  px-[10px] 2xl:px-14 w-full h-full ">
          <Heading1 text={`Our Clients`} color="#000" />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Paragraph
            color="#000"
            text="Thousands of leading brands from all over the world trust our solutions and choose us as a partner."
          />
          <Spacer height="h-[15px] md:h-[30px]" />
          <ClientLogoSlider clientLogoSliderData={clientLogoSliderData} />
        </div>
      </section>

      {/* section 8 - testimonials */}
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

      {/* section 7 - Knoledge center */}
      <section className="bg-cover bg-center md:flex items-end justify-center bg-white">
        <div className="text-white text-center max-w-screen-2xl mx-auto py-[40px]  px-[10px] 2xl:px-14 w-full h-full ">
          <Heading1 text={`Knowledge Centre`} color="#000" />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Paragraph
            color="#000"
            text="These feedbacks will confirm to you that we have led our clients to success."
          />
          <Spacer height="h-[15px] md:h-[30px]" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
