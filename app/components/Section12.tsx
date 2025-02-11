"use client";
import Image from 'next/image';
import React, { useState } from 'react';

interface TabContent {
  title: string;
  description: string;
}

const Section12: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Research');

  const tabContent: { [key: string]: TabContent } = {
    Research: {
      title: "LOREM IPSUM DOLOR SIT AMET (Research)",
      description: "Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan. (Research Content)",
    },
    Plan: {
      title: "LOREM IPSUM DOLOR SIT AMET (Plan)",
      description: "This is the content for the Plan section. Planning details go here. Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan. (Plan Content)",
    },
    Design: {
      title: "LOREM IPSUM DOLOR SIT AMET (Design)",
      description: "This is the content for the Design section. Design specifics. Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan. (Design Content)",
    },
  };

  return (
    <section className="bg-white py-20 mt-6">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center gap-40">
          <div className="md:w-1/2 text-left md:pr-10 lg:-translate-x-12">
            <h1>
              {tabContent[activeTab].title}
            </h1>

            <div className="space-x-4 mb-6 border-2 border-gray-300 flex items-center justify-between">
              {Object.keys(tabContent).map((tabName) => (
                <button
                  key={tabName}
                  className={`px-4 py-2 font-medium bg-white hover:bg-slate-300 border-r-4 border-black
                    ${activeTab === tabName ? 'bg-slate-400 text-black' : 'bg-gray-200 text-gray-600'}
                  `}
                  onClick={() => setActiveTab(tabName)}
                >
                  {tabName}
                </button>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {tabContent[activeTab].description}
            </p>

            <button className="hover:text-blue-700 font-medium">
              Check tools →
            </button>
          </div>

          <div className="md:w-1/2 lg:mt-8 md:mt-0">
            <div className="relative">
              <Image
                src={"/img-14.png"}
                width={300}
                height={300}
                alt="Handshake"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section12;