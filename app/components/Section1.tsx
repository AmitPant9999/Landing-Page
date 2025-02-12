"use client";

import Image from 'next/image';
import Border from './Border';
import { motion } from "framer-motion"; // Import motion
import { Butterfly_Kids } from 'next/font/google';
import Button from './Button';

interface Section1Props {}

const Section1: React.FC<Section1Props> = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} // Start below the viewport
      whileInView={{ opacity: 1, y: 0 }} // Animate into view
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-white py-20 shadow-lg relative ml-14"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-blue-400">Lorem Ipsum Dolor Sit</h3>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side: Text Content */}
          <motion.div // Wrap the left content
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }} // Add delay
            className="md:w-1/2 text-left md:pr-16"
          >
            <h1>LOREM IPSUM DOLOR SIT AMET</h1>
            <p className="text-gray-500 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
              donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
              nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
            </p>

            {/* Testimonials */}
            <motion.div // Wrap testimonials
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
              className="space-y-4"
            >
              {/* ... (testimonials content - no changes needed) */}
              <div className="flex flex-col md:flex-row items-center gap-5">
                <Image src="/img-3.png" width={150} height={150} alt="Testimonial 1" />
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.
                </p>
              </div>
              {/* ... (other testimonials) */}
            </motion.div>


            {/* Bottom Links */}
            <motion.div // Wrap bottom links
              initial={{ opacity: 0, y: 20 }} // Start slightly below
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }} // Delay for last element
              className="mt-8 flex items-center gap-6"
            >
              <Button/>
              <span className="text-gray-500">123456789</span>
            </motion.div>
          </motion.div>

          {/* Right Side: Image Carousel */}
          <motion.div // Wrap the image carousel
            initial={{ opacity: 0, scale: 0.9 }}  // Start slightly smaller
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }} // Delay for the last element
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <div className="">
              <Image
                width={800}
                height={700}
                src="/img-2.png"
                alt="Motorcycle 1"
              />
              {/* Add more Image components for other carousel images */}
            </div>
          </motion.div>
        </div>
        <Border />
      </div>
    </motion.section>
  );
};

export default Section1;