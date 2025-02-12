import Image from "next/image";
import Button from "./Button";
import React from "react";

const images = [
  "/bike-1.png",
  "/bike-2.png",
  "/bike-3.png",
  "/bike4.png",
  "/bike-5.png",
];

const Section9: React.FC = () => {
  return (
    <div className=" container mt-24   pl-14 ">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="lg:flex">
          <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-start">
            <h4 className="text-gray-700">NO LIMITS</h4>
            <h1 className="text-2xl font-extrabold text-gray-900">
              LOREM IPSUM DOLOR SIT AMET
            </h1>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
            </p>
            <div className="mt-6">
              <Button />
            </div>
          </div>
          <Image
            src={"/bike-6.png"}
            width={200}
            height={400}
            alt=""
            className="h-56 lg:translate-x-20 lg:translate-y-28"
          />
        </div>

        <div className="   col-span-3 md:col-span-2 grid grid-cols-2 gap-2 ml-32">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative ${
                index === 2 ? "col-span-2 h-48" : "h-32"
              } w-full`}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`} // Added alt text
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section9;
