import React from 'react';

import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#24292e] py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center flex-col md:flex-row justify-between md:items-start">

          <div className="md:w-auto mb-8 md:mb-0">
            <Logo />
          </div>

          <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-auto gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">Lorem Ipsum</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Lorem Ipsum</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Lorem Ipsum</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Lorem Ipsum</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
