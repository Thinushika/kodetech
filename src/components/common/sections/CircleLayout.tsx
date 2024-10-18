import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const icons = [
  {
    image: "/icons/Game-dev.png",
    title: "Game",
    subtitle: "Development",
    link: '/'
  },
  {
    image: "/icons/metaverse.png",
    title: "Metaverse",
    subtitle: "Solutions",
    link: '/'
  },
  {
    image: "/icons/blockchain-dev.png",
    title: "Block chain",
    subtitle: "Solutions",
    link: '/'
  },
  {
    image: "/icons/software-dev.png",
    title: "Software",
    subtitle: "Development",
    link: '/'
  },
  {
    image: "/icons/mobile-dev.png",
    title: "Mobile",
    subtitle: "Development",
    link: '/'
  },
  {
    image: "/icons/ar-dev.png",
    title: "AR and VR",
    subtitle: "Solutions",
    link: '/'
  },
  {
    image: "/icons/web-dev.png",
    title: "Web",
    subtitle: "Development",
    link: '/'
  },
  {
    image: "/icons/ai-dev.png",
    title: "AI",
    subtitle: "Solutions",
    link: '/'
  },
];


const CircleLayout = () => {
  return (
    <div className="relative flex justify-center items-center h-[700px] w-[700px] mx-auto">
      
      <div className="absolute w-[180px] h-[180px] rounded-full bg-[#EDEDED] shadow-lg flex justify-center items-center text-black text-center font-semibold  z-30">
        Our <br /> Capabilities
      </div>

      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#fff4f4] z-10"></div>

      <div className="absolute w-[500px] h-[500px] rotating-circle rounded-full border border-gray-300"></div>

      {icons.map((icon, index) => {
        const angle = (index / icons.length) * 2 * Math.PI;
        const radius = 250; 

        const x = radius * Math.cos(angle); 
        const y = radius * Math.sin(angle);

        return (
          <div
            key={index}
            className="absolute w-[180px] h-[180px] rounded-full bg-red-500 text-white flex justify-center items-center"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              background: `radial-gradient(43.78% 43.78% at 46.38% 49.87%, #FFDADA 0%, #F6C7C7 38.37%, #EFB8B8 59.12%, rgba(255, 218, 218, 0) 100%)`
            }}
          >
            <Link href={icon.link}>
            <div
              key={index}
              className="w-[150px] hover:scale-110 transition-all duration-300 ease-in-out transform h-[150px] rounded-full flex justify-center items-center"
            >
              <Image
                src={"/img/circle.png"}
                alt="Circle"
                layout="responsive"
                width={100}
                height={100}
              />
              <div className="flex flex-col absolute justify-center items-center">
              <Image
                src={icon.image}
                alt={icon.title}
                width={40}
                height={40}
              />
                <p className='text-[13px] text-[#000] font-poppins font-[400] leading-tight'> {icon.title} <br /> {icon.subtitle}</p>
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
