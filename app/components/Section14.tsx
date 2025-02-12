'use client'
import Image from 'next/image';
import React, { useState, useEffect, Suspense } from 'react'; // Import Suspense
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Section14: React.FC = () => {
  const [Carousel, setCarousel] = useState<any>(null); // Use 'any' type or correct one if known

  useEffect(() => {
    import('react-responsive-carousel').then((module) => {
      setCarousel(() => module.Carousel); // Assign the Carousel *function* to state
    }).catch(error => {
        console.error("Error loading carousel:", error);
        // Optionally set a fallback or error state here
    });
  }, []);

  const slides = [
    {
      image: "/img-16.png", // Replace with your image path
      title: "Artist & Investor",
      description: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est...",
    },
    {
      image: "/img-3.png", 
      title: "Another Title",
      description: "This is the description for the second slide.  You can put different content here.",
    },
    {
      image: "/img-4.png", 
      title: "Yet Another Title",
      description: "And here's the third slide's content.  Make it interesting!",
    },
    // ...
  ];

  if (!Carousel) {
    return <div>Loading...</div>; 
  }


  const MyCarousel = () => ( 
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      renderIndicator={(onClickHandler:(index: number) => void, isSelected: boolean, index: number) => (
        <li
          key={index}
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          tabIndex="0"
          aria-label={`Go to slide ${index + 1}`}
          className={`indicator ${isSelected ? 'active' : ''}`}
          style={{ }}
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
  );

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
            <Suspense fallback={<div>Loading the carousel...</div>}> {/* Use Suspense */}
              <MyCarousel />
            </Suspense>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Section14;
