/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import QuickLinks from "../../data/navItems.json";
import OurServices from "../../data/ourServices.json";
import Spacer from "../common/elements/Spacer";
import { urlFor } from "sanity";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import Paragraph from "../common/elements/Paragraph";

type FooterProps = {
  logo: string;
  address: string;
  email: string[];
  contactNumbers: string[];
  socialLinks: { name: string; url: string; icon: string }[];
};

const socialLinksFooter = [
  {
    icon: <FaLinkedinIn />,
    name: "linkedin",
    link: "/",
  },
  {
    icon: <FaFacebookF />,
    name: "facebook",
    link: "/",
  },
  {
    icon: <FaInstagram />,
    name: "instergram",
    link: "/",
  },
];

const Footer: React.FC<FooterProps> = ({
  logo,
  address,
  email,
  contactNumbers,
  socialLinks,
}) => {
  // console.log("icons:", socialLinks);
  return (
    <footer className="footer-container bg-black">
      <div className="container flex flex-col lg:flex-row justify-between items-start max-w-screen-2xl mx-auto py-14 px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col lg:w-[25%]">
          <Link href="/" passHref>
            {logo && (
              <Image
                src={logo}
                alt="Logo Light"
                width={198}
                height={36}
                className="w-auto h-6 lg:h-8"
              />
            )}
          </Link>
          <Spacer height="h-[15px] md:h-[30px]" />
          {contactNumbers && (
            <div className="footer-contact-numbers">
              <ul>
                {contactNumbers.map((number, index) => (
                  <li key={index}>{number}</li>
                ))}
              </ul>
            </div>
          )}
          <Spacer height="h-[15px] md:h-[30px]" />
          {address &&
            address.split("\n").map((line, index) => (
              <p key={index} className="footer-address">
                {line}
              </p>
            ))}
        </div>

        <div className="flex flex-col lg:w-[20%]">
          <h3 className="font-extrabold uppercase">QUICK LINKS</h3>
          <Spacer height="h-[15px] md:h-[30px]" />
          {QuickLinks.map((link, index) => (
            <>
              <Link key={index} href={link.url} className=" mb-[10px]">
                {link.name}
              </Link>
            </>
          ))}
        </div>

        <div className="flex flex-col lg:w-[25%]">
          <h3 className="font-extrabold uppercase">OUR SERVICES</h3>
          <Spacer height="h-[15px] md:h-[30px]" />
          {OurServices.map((link, index) => (
            <>
              <Link key={index} href={link.url} className=" mb-[10px]">
                {link.name}
              </Link>
            </>
          ))}
        </div>

        <div className="flex flex-col lg:w-[30%]">
          <h3 className="font-extrabold uppercase">CONTACT US </h3>
          <Spacer height="h-[15px] md:h-[30px]" />
          {/* {email && (
            <ul className="footer-email-list">
              {email.map((emailItem, index) => (
                <li key={index} className=" mb-[10px]">{emailItem}</li>
              ))}
            </ul>
          )} */}
          <div className="flex flex-col">
            <p className="mb-[10px]">Your Email</p>
            <div className="flex flex-row w-100">
              <form action="" method="post" className="">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="bg-transparent border rounded-[5px] px-[15px] py-[10px] me-[10px]"
                />
                <button
                  type="submit"
                  className="bg-[#EB131B] px-[20px] py-[10px] rounded-[5px]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <Spacer height="h-[15px] md:h-[30px]" />
          <ul style={{ listStyle: "none" }} className="flex flex-row w-full">
            {socialLinksFooter.map((link, index) => (
              <li key={index} className="px-2 w-max">
                <Link href={link.link} passHref className="z-50">
                  {/* {link.icon && (
                    <Image
                      src={urlFor(link.icon).url()}
                      alt={link.name}
                      width={15}
                      height={15}
                      className="h-[15px] w-auto"
                    />
                  )} */}
                  <div
                    className="flex justify-center items-center w-[40px] h-[40px] bg-[#ffffff67] p-[10px] z-50"
                    style={{ borderRadius: "100%" }}
                  >
                    {link.icon}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="w-100 bg-[#EB131B] h-[1px]"></div>
        <Spacer height="h-[15px] md:h-[30px]" />
        <div className="flex flex-col lg:flex-row justify-between">
          <Paragraph color="#fff" text="Copyright 2023 Kodetech (Pvt) Ltd." />
          <div className="flex flex-col lg:flex-row justify-end">
            <Link href={"/"} className="me-[30px]">Terms & Conditions</Link>
            <Link href={"/"}>Privacy Policy</Link>
          </div>
        </div>
        <Spacer height="h-[15px] md:h-[30px]" />
      </div>
    </footer>
  );
};

export default Footer;
