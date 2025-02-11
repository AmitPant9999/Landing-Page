import Image from 'next/image';
import React from 'react';

const Section14: React.FC = () => {
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
            <div className="flex items-center space-x-4"></div>
            <div className="md:w-1/2 mt-8 md:mt-0"></div>
          </div>
          <div className="flex lg-flex relative justify-center">
            <Image
              src={"/img-16.png"}
              alt="Descriptive Alt Text"
              width={500}
              height={400}
              className="h-1/2"
            />

            <div className="flex flex-col lg:flex-row items-center space-x-4 lg:w-1/2">
              <div className="shadow-md relative z-10 bg-slate-100 rounded-lg p-6 lg:-translate-x-12">
                <h2 className="text-xl font-medium text-gray-800 mb-2">
                  Artist & Investor
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Enim sagittis, sit porttitor morbi lobortis amet, libero
                  adipiscing auctor. Malesuada tristique libero, id netus
                  tincidunt. Egestas ac arcu amet nisl quis est...
                </p>
                <button className="background-color: #1959ac  hover:bg-blue-700 font-medium">
                  Read Full Story →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section14;