"use client";

import Logo from './Logo';
import React from 'react';
import { motion } from "framer-motion";

const Section6: React.FC = () => {
return (<motion.div
  initial={{ opacity: 0, y: 50 }}
   whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative bg-cover bg-center mt-14 flex flex-col " // Removed h-screen
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="my-10 mx-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          className='translate-y-10'
        >
          <Logo />
        </motion.div>
      </div>
      <div className=" z-10  text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          className=" text-center"
        >
          <h1 className='text-center -translate-y-14  '>
            DOLOR SIT AMET CONSECTETUR. 
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Section6;