import React from 'react';

type HeadingProps = {
  text: string;
  color: string;
};

const Heading3: React.FC<HeadingProps> = ({ text, color }) => {
  return <h3 className={`text-[${color}] text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[30px] font-extrabold leading-tight p-0 m-0`}>{text}</h3>;
};

export default Heading3;
