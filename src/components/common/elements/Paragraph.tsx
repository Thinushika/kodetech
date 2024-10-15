import React from "react";

type ParagraphProps = {
  text: string;
  color: string;
};

const Paragraph: React.FC<ParagraphProps> = ({ text, color }) => {
  return (
    <>
      <p className="text-[16px] lg:text-[18px] 2xl:text-[20px] leading-snug p-0 m-0" style={{color: color}}>{text}</p>
    </>
  );
};

export default Paragraph;
