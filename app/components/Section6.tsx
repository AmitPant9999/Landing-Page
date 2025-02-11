import Image from 'next/image';
import Logo from './Logo';
import React from 'react';

const Section6: React.FC = () => {
  return (
    <div className="relative h-screen bg-cover bg-center mt-14" style={{ backgroundImage: "url('/bg.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="my-10 mx-10">
        <Logo />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="text-center w-2/3">
          <h1>
            DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM
            VIVERRA MI. DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section6;