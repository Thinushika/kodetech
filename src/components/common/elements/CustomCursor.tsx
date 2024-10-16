import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition1, setTrailingPosition1] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setPosition({ x: mouseX, y: mouseY });

      setTimeout(() => {
        setTrailingPosition1({ x: mouseX - 20, y: mouseY - 20 });
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-none">
        <div
          className="fixed top-[-16px] left-[-16px] w-[10px] h-[10px] bg-[#EB131B] rounded-full pointer-events-none z-50"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
        
        <div
          className="fixed top-0 left-0 w-6 h-6 bg-[#fca7aa8f] rounded-full pointer-events-none z-40"
          style={{
            transform: `translate(${trailingPosition1.x}px, ${trailingPosition1.y}px)`,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
