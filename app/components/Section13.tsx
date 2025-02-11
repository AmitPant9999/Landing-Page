import Image from "next/image";
import Button from "./Button";
import Border from "./Border";
import React from 'react';

const Section13: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row pl-14 bg-slate-100 p-10 mt-24 -z-30">
      <div className="flex flex-col items-start">
        <div className="md:w-1/2">
          <h2 className="text-blue-500">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
          </h2>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
            laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt
            ultricies feugiat mauris.
          </p>
        </div>

        <div className="mt-4">
          <Button />
        </div>

        <div className="mt-6 bg-slate-50 shadow-lg shadow-black p-4 rounded-md md:w-96 md:translate-y-32 relative -z-20">
          <div className="p-5 ">
            <h3>Lorem ipsum dolor sit</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur. vitae amet habitasse
              semper.
            </p>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
              placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc
              id tristique sit.
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur. Hac netus consectetur
              amet quisque scelerisque facilisi. Ultrices lectus viverra
              pharetra commodo.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 lg:h-2/3 flex mt-6 md:mt-0 lg:-translate-y-36">
        <Image
          src="/img-15.png"
          width={450}
          height={450}
          alt="Scooter" // Added alt text
          className="rounded-lg shadow-md h-1/2"
        />
      </div>
      <div className="-z-40">
        <Border />
      </div>
    </section>
  );
};

export default Section13;