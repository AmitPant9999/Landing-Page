"use client";

import Image from 'next/image'; // Import the Next.js Image component
import { motion } from "framer-motion";

const Section8 = () => {
  return (
    <motion.section // Wrap the section with motion.section
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      whileInView={{ opacity: 1, y: 0 }} // Animation when in view
      viewport={{ once: true }} // Animate only once
      transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
      className='py-12 bg-slate-100'
    >
       <div className='flex flex-col md:flex-row items-center md:items-start '>

        <motion.div // Animate the left side content
          initial={{ opacity: 0, x: -50 }} // Start from the left and transparent
          whileInView={{ opacity: 1, x: 0 }} // Animate into view
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }} // Add a delay
          className='w-1/2'
        >

       <div className="flex flex-col gap-2 ml-14">
          <h3 className="text-blue-500">Lorem ipsum dolor sit amet</h3>

          <h2>LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.</h2>
          <p className=''>Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leoeleifend condimentum in vitae faucibus. Amet massa malesuada sitpretium. Donec pharetra erat lacus suspendisse ornare.</p>
        </div>
        <motion.div // Animate the download buttons
          initial={{ opacity: 0, scale: 0.9 }} // Start slightly smaller and transparent
          whileInView={{ opacity: 1, scale: 1 }} // Animate into view
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }} // Add a delay
          className='mt-10 flex gap-6 translate-x-12 '
        >
          <Image src={"/googleplay.png"} width={100} height={100} alt='' />
          <Image src={'/app store.png'} width={100} height={100} alt=''/>
        </motion.div>
        </motion.div>

        <motion.div // Animate the image on the right
          initial={{ opacity: 0, scale: 0.9 }} // Start slightly smaller and transparent
          whileInView={{ opacity: 1, scale: 1 }} // Animate into view
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }} // Add a delay
          className='translate-y-12'
        >
          <Image src={"/img-12.png"} width={500} height={450} alt='' />
        </motion.div>
       </div>
    </motion.section>
    
  );
};

export default Section8;