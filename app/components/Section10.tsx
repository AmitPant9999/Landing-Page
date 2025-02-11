import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import Border from "./Border";
import React from 'react';

const Section10: React.FC = () => {
  return (
    <div className="bg-slate-100 mt-32 relative">
      <div className="grid md:grid-cols-auto gap-4">
        <div className="-translate-y-12">
          <Image src={"/img-13.png"} height={400} width={500} alt="Image 13" /> {/* Added alt text */}
        </div>
        <div className="mt-12 lg:w-2/3 mb-4">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-blue-500">Lorem ipsum dolor sit amet</h3>
            <h1 className="text-center md:text-start">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
              leo eleifend condimentum in vitae faucibus.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-4 lg:gap-x-24 gap-y-6">
              <h3>Lorem ispumm</h3>
              <h3>Lorem ispumm</h3>
              <h3>Lorem ispumm</h3>
              <h3>Lorem ispumm</h3>
              <h3>Lorem ispum</h3>
              <h3>Lorem ispumm</h3>
            </div>
            <div className="md:item-start">
              <Button />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Border />
      </div>
    </div>
  );
};

export default Section10;