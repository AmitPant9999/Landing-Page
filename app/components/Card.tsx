import Image from 'next/image';
import React from 'react';

interface CardProps {
  id: string | number;
  content: string;
  author: string;
  image: string;
}

const Card: React.FC<CardProps> = ({  content, author, image }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md text-gray-800 w-64 h-72 hover:scale-110 transition duration-300">
      <p className="text-sm mb-4">{content}</p>
      <div className="flex items-center">
        <Image src={image} alt={author} width={40} height={40} className="rounded-full mr-2" />
        <p className="text-sm">{author}</p>
      </div>
    </div>
  );
};

export default Card;
