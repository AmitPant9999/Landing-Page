"use client";
import { useRef } from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from 'react';

interface CardData {
  id: number;
  content: string;
  author: string;
  image: string;
}

const Section11: React.FC = () => {
  const cards: CardData[] = [
    {
      id: 1,
      content:
        "Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      author: "Jane Cooper",
      image: "/user-1.jpeg",
    },
    {
      id: 2,
      content:
        "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      author: "Ralph Edwards",
      image: "/user-2.jpeg",
    },
    {
      id: 3,
      content:
        "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet",
      author: "Courtney Henry",
      image: "/user-4.jpeg",
    },
    {
      id: 4,
      content:
        "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque",
      author: "Cameron Willam",
      image: "/user-3.jpeg",
    },
  ];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="bg-blue-500 min-h-screen text-white mt-20 pl-14">
      <div className="container flex flex-col py-8 gap-16 ">
        <div className="flex justify-between items-center mb-8 mt-2">
          <div className="w-2/3">
            <h4 className="text-4xl font-bold mb-2">
              Join other Sun harvesters
            </h4>
            <h1 className="text-lg">LOREM IPSUM DOLOR SIT AMET</h1>
            <p>
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo
            </p>
          </div>
          <button className="text-black bg-white px-2 py-2 w-32 -translate-x-4">
            Lorem Ipsum
          </button>
        </div>

        <div className="">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 scroll-smooth snap-x snap-mandatory py-4 overflow-x-hidden"
          >
            {cards.map((card) => (
              <div key={card.id} className="snap-start shrink-0">
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={scrollLeft} className="border-2 border-white text-white px-4 py-2 rounded-full flex items-center">
            <FaChevronLeft className="w-2" />
          </button>
          <button onClick={scrollRight} className="text-white px-4 py-2 rounded-full flex items-center">
            <FaChevronRight className="w-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section11;