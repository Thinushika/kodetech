import React from "react";

type ParagraphProps = {
  text: string;
  color: string;
  lineClamp?: boolean; 
  lineClampNumber?: number;
};

const ParagraphSecondaryStyle: React.FC<ParagraphProps> = ({
  text,
  color,
  lineClamp = false,
  lineClampNumber = 2,
}) => {
  const getLineClampClass = () => {
    if (!lineClamp) return ""; 

    switch (lineClampNumber) {
      case 3:
        return "line-clamp-3";
      case 4:
        return "line-clamp-4";
      case 5:
        return "line-clamp-5";
      default:
        return "line-clamp-2"; 
    }
  };

  return (
    <p
      className={`text-[14px] md:text-[14px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px] leading-snug p-0 m-0 ${getLineClampClass()}`}
      style={{ color }}
    >
      {text}
    </p>
  );
};

export default ParagraphSecondaryStyle;
