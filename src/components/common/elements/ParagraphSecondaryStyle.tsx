import React from "react";

type ParagraphProps = {
  text: string;
  color: string;
  lineClamp?: boolean; 
};

const ParagraphSecondaryStyle: React.FC<ParagraphProps> = ({ text, color, lineClamp = false  }) => {
  return (
    <p
      className={`text-[14px] md:text-[14px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px] leading-snug p-0 m-0 ${
        lineClamp ? 'line-clamp-2' : ''
      }`}
      style={{ color }}
    >
      {text}
    </p>
  );
};

export default ParagraphSecondaryStyle;
