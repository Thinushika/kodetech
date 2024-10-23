import React from 'react';

type HeadingProps = {
  text: string;
  color: string;
};

const Heading2: React.FC<HeadingProps> = ({ text, color }) => {
  return <h3 className={`text-[${color}] text-[22px] md:text-[30px] xl:text-[45px] font-extrabold leading-tight p-0 m-0`}>{text}</h3>;
};

export default Heading2;
