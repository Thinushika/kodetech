"use client";
import Image from "next/image";
import React from "react";
import Heading3 from "./Heading3";
import ParagraphSecondaryStyle from "./ParagraphSecondaryStyle";
import ButtonSecondary from "./ButtonSecondary";

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
      <div className="flex p-[10px]">
        <div className="flex flex-col bg-white rounded-sm text-start">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg w-full"
          />
          <Heading3 text={title} color="#252B42" />
          <ParagraphSecondaryStyle
            text={description}
            color="#737373"
            lineClamp={true}
            lineClampNumber ={3}
          />
          <ButtonSecondary text="Learn More" href={link} withArrow={true} />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
