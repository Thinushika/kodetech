import Image from "next/image";
import Link from "next/link";
import React from "react";
import QuickLinks from "../../data/navItems.json";
import OurServices from "../../data/ourServices.json";

type FooterProps = {
  logo: string;
  address: string;
  email: string[];
  contactNumbers: string[];
  socialLinks: { name: string; url: string; icon: string }[];
};

const Footer: React.FC<FooterProps> = ({
  logo,
  address,
  email,
  contactNumbers,
  socialLinks,
}) => {
  return (
    <footer className="footer-container bg-black">
      <div className="container flex flex-col lg:flex-row justify-between items-start max-w-screen-2xl mx-auto py-4 px-4 sm:px-6 lg:px-14">
      <div className="flex flex-col">
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
        {contactNumbers && (
          <div className="footer-contact-numbers">
            <p>Contact Numbers:</p>
            <ul>
              {contactNumbers.map((number, index) => (
                <li key={index}>{number}</li>
              ))}
            </ul>
          </div>
        )}
        {address && address.split('\n').map((line, index) => (
          <p key={index} className="footer-address">{line}</p>
        ))}
      </div>

      <div className="flex flex-col">
        <h3>QUICK LINKS</h3>
        {QuickLinks.map((link, index) => (
          <>
            <Link key={index} href={link.url}>
              {link.name}
            </Link>
          </>
        ))}
      </div>

      <div className="flex flex-col">
        <h3>OUR SERVICES</h3>
        {OurServices.map((link, index) => (
          <>
            <Link key={index} href={link.url}>
              {link.name}
            </Link>
          </>
        ))}
      </div>

      <div className="flex flex-col">
        {email && (
          <ul className="footer-email-list">
            {email.map((emailItem, index) => (
              <li key={index}>{emailItem}</li>
            ))}
          </ul>
        )}


        {socialLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.url} passHref>
              {link.name}
            </Link>
          </li>
        ))}
      </div>
      </div>
    </footer>
  );
};

export default Footer;
