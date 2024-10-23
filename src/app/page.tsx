import Image from "next/image";
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

type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "AI - Powered Chatbot",
    description:
      "Step into the future of communication with our AI-powered chatbot—an intelligent virtual assistant designed to enhance engagement, streamline interactions, and provide personalized assistance effortlessly. ",
    imageUrl: "/img/post-1.png",
    url: "/post/1",
  },
  {
    id: 2,
    title: "E-commerce / POS",
    description:
      "E-commerce/Point of Sale (POS) systems are integral for modern retail. ",
    imageUrl: "/img/post-1.png",
    url: "/post/2",
  },
  {
    id: 3,
    title: "Customer Relationship Management ",
    description:
      "Customer Relationship Management (CRM) is a strategic business tool empowering organizations to manage",
    imageUrl: "/img/post-1.png",
    url: "/post/3",
  },
  {
    id: 4,
    title: "Lorem Ipsum ",
    description:
      "Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been the simply dummy text.",
    imageUrl: "/img/post-1.png",
    url: "/post/4",
  },
];

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
        <div className="flex flex-col text-start max-w-screen-2xl mx-auto px-[15px] py-[40px] xl:p-14">
          <div className="container mx-auto px-0 py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* First Column - First Post */}
              <div className="first-post bg-white p-0 rounded-lg shadow-lg">
                <Image
                  src={posts[0].imageUrl}
                  alt={posts[0].title}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
                <div className="flex flex-col p-[20px]">
                  <Heading3 color="#000" text={posts[0].title} />
                  <Paragraph color="#4D5053" text={posts[0].description} />
                  <Spacer height="h-[15px] md:h-[15px] xl:h-[30px]" />
                  <ButtonSecondary
                    text="Explore More"
                    href={posts[0].url}
                    withArrow={true}
                  />
                </div>
              </div>

              {/* Second Column - Posts 2, 3, and 4 */}
              <div className="second-column space-y-6">
                {posts.slice(1).map((post) => (
                  <div
                    key={post.id}
                    className="post-item bg-white p-0 rounded-lg shadow-lg flex flex-row"
                  >
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="rounded-lg w-1/4 h-auto"
                    />
                    <div className="flex flex-col p-[20px]">
                      <Heading3 color="#000" text={post.title} />
                      <Paragraph color="#4D5053" text={post.description} />
                      <Spacer height="h-[10px]" />
                      <ButtonSecondary
                        text="Explore More"
                        href={post.url}
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
