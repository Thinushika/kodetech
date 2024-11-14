"use client";
import Image from "next/image";
import React from "react";
import Heading3 from "./Heading3";
import ParagraphSecondaryStyle from "./ParagraphSecondaryStyle";
import ButtonSecondary from "./ButtonSecondary";
import Spacer from "./Spacer";

type BlogCardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  link,
  image,
}) => {
  return (
    <>
      <div className="flex p-[10px] lg:p-[20px] shadow-lg rounded">
        <div className="flex flex-col bg-white rounded-sm text-start">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg w-full"
          />
          <Spacer height="h-[15px] md:h-[15px]" />
          <Heading3 text={title} color="#252B42" />
          <ParagraphSecondaryStyle
            text={description}
            color="#737373"
            lineClamp={true}
            lineClampNumber={3}
          />
          <Spacer height="h-[15px] md:h-[15px]" />
          <ButtonSecondary text="Learn More" href={link} withArrow={true} />
          <Spacer height="h-[15px] md:h-[15px]" />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
