import React from "react";

type HeadingProps = {
  text: string;
  color: string;
};

const Heading3: React.FC<HeadingProps> = ({ text, color }) => {
  return (
    <h3
    style={{ color: color }}
      className={`text-[#252B42] text-[18px] md:text-[18px] lg:text-[20px] xl:text-[18px] 2xl:text-[30px] font-extrabold leading-tight md:min-h-10 line-clamp-2 p-0 m-0`}
    >
      {text}
    </h3>
  );
};

export default Heading3;
