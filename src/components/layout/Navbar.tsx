"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import navItems from "../../data/navItems.json";
import { usePathname } from "next/navigation";
import CustomCursor from "../common/elements/CustomCursor";

const Navbar = ({ logo }: { logo: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow-md relative z-50">
      <div className="container flex justify-between items-center max-w-screen-2xl mx-auto py-4 px-4 sm:px-6 lg:px-14">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" passHref>
            {logo && (
              <Image
                src={logo}
                alt="Logo Dark"
                width={198}
                height={36}
                className="w-auto h-6 lg:h-8"
              />
            )}
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.url} passHref>
              <span
                className={`font-poppins 
        ${
          item.type === "button"
            ? "bg-[#F90305] text-white py-2 px-4 rounded-md font-bold text-[16px] border-[#F90305] border-[1px]"
            : pathname === item.url
            ? "text-[#818181] font-bold text-[16px]"
            : "text-[#000000] font-bold text-[16px]"
        } hover:text-[#F90305] hover:bg-white cursor-pointer transition duration-500 ease-in-out`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu Button - Visible on Small Screens */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <CiMenuFries className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.url} passHref>
              <span
                onClick={() => setIsOpen(false)}
                className={`${
                  pathname === item.url
                    ? "text-[#818181] font-bold text-[16px]"
                    : "text-[#000000] font-bold text-[16px]"
                } hover:text-gray-600 cursor-pointer`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <CustomCursor />
    </header>
  );
};

export default Navbar;
