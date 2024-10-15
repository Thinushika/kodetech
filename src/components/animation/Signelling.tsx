import React from 'react';

const SignalHalfCircles = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <div className="absolute w-full h-full rounded-full bg-white-300 clip-half animate-signalCircle1"></div>
      <div className="absolute w-full h-full rounded-full bg-white-500 clip-half animate-signalCircle2"></div>
      <div className="absolute w-full h-full rounded-full bg-white-700 clip-half animate-signalCircle3"></div>
    </div>
  );
};

export default SignalHalfCircles;
