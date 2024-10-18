import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <footer className="footer-container container flex justify-between items-center max-w-screen-2xl mx-auto py-4 px-4 sm:px-6 lg:px-14">
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

      {address && <p className="footer-address">{address}</p>}

      {email && <p className="footer-email">Email: {email}</p>}
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

      {socialLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.url} passHref>
            {link.name}
          </Link>
        </li>
      ))}
    </footer>
  );
};

export default Footer;
