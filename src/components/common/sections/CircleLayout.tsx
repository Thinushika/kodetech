"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const icons = [
  {
    image: "/icons/Game-dev.png",
    title: "Game",
    subtitle: "Development",
    link: "/",
  },
  {
    image: "/icons/metaverse.png",
    title: "Metaverse",
    subtitle: "Solutions",
    link: "/",
  },
  {
    image: "/icons/blockchain-dev.png",
    title: "Block chain",
    subtitle: "Solutions",
    link: "/",
  },
  {
    image: "/icons/software-dev.png",
    title: "Software",
    subtitle: "Development",
    link: "/",
  },
  {
    image: "/icons/mobile-dev.png",
    title: "Mobile",
    subtitle: "Development",
    link: "/",
  },
  {
    image: "/icons/ar-dev.png",
    title: "AR and VR",
    subtitle: "Solutions",
    link: "/",
  },
  {
    image: "/icons/web-dev.png",
    title: "Web",
    subtitle: "Development",
    link: "/",
  },
  {
    image: "/icons/ai-dev.png",
    title: "AI",
    subtitle: "Solutions",
    link: "/",
  },
];

const CircleLayout = () => {
  const [radius, setRadius] = useState(125);

  useEffect(() => {
    const handleResize = () => {
      let newRadius = 125; 
      const width = window.innerWidth;

      if (width >= 1536) {
        newRadius = 125; // 2xl
      } else if (width >= 1280) {
        newRadius = 280; // xl
      } else if (width >= 1024) {
        newRadius = 240; // lg
      } else if (width >= 768) {
        newRadius = 180; // md
      }

      setRadius(newRadius);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative hidden lg:flex justify-center items-center h-[360px] w-full sm:h-[340px] sm:w-[340px] md:h-[500px] md:w-[450px] lg:h-[700px] lg:w-[700px] xl:h-[850px] xl:w-[850px] 2xl:h-[1000px] 2xl:w-[1000px] mx-auto">
      <div className="absolute w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] 2xl:w-[250px] 2xl:h-[250px] rounded-full bg-[#EDEDED] shadow-lg flex justify-center items-center text-black text-center font-semibold z-30">
        Our <br /> Capabilities
      </div>

      <div className="absolute w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] 2xl:w-[450px] 2xl:h-[450px] rounded-full bg-[#fff4f4] z-20"></div>

      <div className="absolute w-[250px] h-[250px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[750px] 2xl:h-[750px] rotating-circle rounded-full border border-gray-300 z-40"></div>

      {icons.map((icon, index) => {
        const angle = (index / icons.length) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <div
            key={index}
            className="absolute w-[110px] h-[110px] sm:w-[110px] sm:h-[110px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] 2xl:w-[250px] 2xl:h-[250px] rounded-full bg-red-500 text-white flex justify-center items-center z-50"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              background: `radial-gradient(43.78% 43.78% at 46.38% 49.87%, #FFDADA 0%, #F6C7C7 38.37%, #EFB8B8 59.12%, rgba(255, 218, 218, 0) 100%)`,
            }}
          >
            <Link href={icon.link}>
              <div
                className="w-[90px] sm:w-[90px] md:w-[120px] lg:w-[140px] xl:w-[160px] 2xl:w-[200px] hover:scale-110 transition-all duration-300 ease-in-out transform h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px] xl:h-[180px] 2xl:h-[200px] rounded-full flex justify-center items-center"
              >
                <Image
                  src={"/img/circle.png"}
                  alt="Circle"
                  layout="responsive"
                  width={60}
                  height={60}
                />
                <div className="flex flex-col absolute justify-center items-center">
                  <Image
                    src={icon.image}
                    alt={icon.title}
                    width={20}
                    height={20}
                    className="w-[20px] sm:w-[30px] lg:w-[30px] xl:w-[40px] 2xl:w-[50px] h-auto"
                  />
                  <p className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] text-[#000] font-semibold leading-tight">
                    {icon.title} <br /> {icon.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CircleLayout;
