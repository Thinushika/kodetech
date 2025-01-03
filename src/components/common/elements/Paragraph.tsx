import React from "react";

type ParagraphProps = {
  text: string;
  color: string;
};

const Paragraph: React.FC<ParagraphProps> = ({ text, color }) => {
  return (
    <>
      <p
        className="text-[14px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-snug p-0 m-0"
        style={{ color: color }}
      >
        {text}
      </p>
    </>
  );
};

export default Paragraph;
