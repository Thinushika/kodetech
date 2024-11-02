"use client";
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

type ButtonProps = {
  text: string;
  href: string;
  withArrow?: boolean; 
  showBorder?: boolean;
  padding?: boolean;
  bgColor?: boolean;
};

const ButtonSecondary: React.FC<ButtonProps> = ({ text, href, withArrow = false, showBorder = true, padding = true, bgColor=true }) => {

    const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className={`inline-flex w-max items-center  text-[#EB131B] text-[14px] md:text-[14px] lg:text-[16px] rounded-md transition-all duration-300 ease-in-out transform z-50 
        ${
        showBorder ? 'border border-[#EB131B]' : ''
      }  ${
        padding ? 'px-[10px] lg:px-6 py-[8px] lg:py-[10px]' : 'p-0'
      }${
        bgColor ? 'bg-[#fff]' : 'bg-transparent'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
      {withArrow && (
        <span
          className={`ml-2 transition-transform duration-300 ease-in-out ${
            hovered ? 'translate-x-1' : ''
          }`}
          style={{ transform: hovered ? 'translateX(10px)' : 'translateX(0)' }}
        >
          {hovered ? (
            <MdOutlineKeyboardDoubleArrowRight className='text-[14px] md:text-[16px] lg:text-[18px]' />
          ) : (
            <MdOutlineKeyboardArrowRight className='text-[14px] md:text-[16px] lg:text-[18px]' />
          )}
        </span>
      )}
    </a>
  );
};

export default ButtonSecondary;
