import Image from 'next/image';
import React from 'react';
import Logo from './Logo';
import Button from './Button';

const Section16: React.FC = () => {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <Logo />
        </div>

        <h1 className="mb-4">
          LOREM IPSUM DOLOR SIT AMET
          <br />
          CONSECTETUR. DUI.
        </h1>

        <p className="leading-relaxed mb-8">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </p>

        <div>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Section16;