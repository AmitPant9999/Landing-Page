import Image from 'next/image';
import Logo from './Logo';
import React from 'react';

interface Section3Props {}

const Section3: React.FC<Section3Props> = () => {
  return (
    <div className="relative bg-black overflow-hidden h-screen mt-20 py-12">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="/img-7.png"
          alt="Motorcycles"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
      </div>

      {/* Content */}
      <div className="my-10 mx-10 ">
        <Logo />
      </div>

      <div className="relative z-10 flex flex-col items-center text-white lg:translate-y-24">
        {/* Heading */}
        <h1 className="text-center w-2/3 text-4xl font-bold leading-tight md:mb-6"> {/* Style the heading */}
          Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.
        </h1>

        {/* Text Content */}
        <div className="container mx-auto w-1/2">
          <div className="grid grid-cols-1 md:gap-8">
            <div>
              <p className="text-lg leading-relaxed text-center ">
                Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
                volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
                justo pellentesque id sed. Id tellus id luctus id. At quis nunc
                libero urna arcu vulputate sed ut. Nisl porta massa diam
                condimentum nulla quam.
              </p>
            </div>
            <div>
              <p className="text-lg text-center leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
                condimentum ultrices non. Ornare semper in tincidunt
                pellentesque cras mauris in vitae. At viverra quis eu malesuada
                vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt
                morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt
                cursus vitae leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;