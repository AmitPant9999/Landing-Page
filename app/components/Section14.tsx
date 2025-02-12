'use client'
import Image from 'next/image';
import React, { useState, useEffect, Suspense } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; // Import Carousel directly

const Section14: React.FC = () => {
  const slides = [
    {
      image: "/img-16.png",
      title: "Artist & Investor",
      description: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est...",
    },
    {
      image: "/img-3.png",
      title: "Another Title",
      description: "This is the description for the second slide. You can put different content here.",
    },
    {
      image: "/img-4.png",
      title: "Yet Another Title",
      description: "And here's the third slide's content. Make it interesting!",
    },
    // ...
  ];

  const handleIndicatorClick = (index: number) => {
    return (event: React.MouseEvent<HTMLLIElement>) => {
      event.preventDefault();
      // Access the carousel instance and call the appropriate method
      const carouselInstance = document.querySelector('.carousel'); // Or a more specific selector
      if (carouselInstance) {
          (carouselInstance as any).goTo(index); // Type assertion if necessary
      }
    };
  };



  return (
    <section className="bg-white py-20 md:mt-24">
      <div className="container mx-auto px-6">
        <div>
          <div className="text-center md:pr-10">
            <h1>LOREM IPSUM DOLOR SIT AMET</h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis
              dictumst. Ornare faucibus quis velit fringilla aliquam
              ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam
              dignissim. Sed ut vestibulum eget purus ornare. Risus elit et
              fringilla habitant ut facilisi.
            </p>
          </div>

          <div className="mt-12">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              renderIndicator={(onClickHandler, isSelected, index) => (
                <li
                  key={index}
                  onClick={handleIndicatorClick(index)}
                  onKeyDown={handleIndicatorClick(index)} // Make accessible via keyboard
                  tabIndex={0} // Make focusable
                  aria-label={`Go to slide ${index + 1}`}
                  className={`indicator ${isSelected ? 'active' : ''}`}
                  style={{}}
                />
              )}
            >
              {slides.map((slide, index) => (
                <div key={index} className="flex lg:flex-row items-center space-x-4">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={500}
                    height={400}
                    className="h-1/2"
                  />
                  <div className="shadow-md relative z-10 bg-slate-100 rounded-lg p-6 lg:-translate-x-12">
                    <h2 className="text-xl font-medium text-gray-800 mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {slide.description}
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                      Read Full Story →
                    </button>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section14;
