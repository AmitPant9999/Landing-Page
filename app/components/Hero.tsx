"use client";

import Image from "next/image";
import * as yup from 'yup';
import { useState } from 'react';
import { motion } from "framer-motion"; // Import framer-motion

interface Props {
  anyNonNullishValue?: object;
}

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
});

const Hero: React.FC<Props> = ({}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await schema.validate({ email }, { abortEarly: false });
      console.log('Form data is valid:', { email });
      setError('');

    } catch (validationError) {
      if (validationError instanceof yup.ValidationError && validationError.inner && validationError.inner.length > 0) {
        setError(validationError.inner[0].message);
      } else {
        setError("An error occurred during validation.");
      }
    }
  };

  return (
    <motion.section // Wrap the section with motion.section
      initial={{ opacity: 0, y: -50 }} // Initial animation values
      animate={{ opacity: 1, y: 0 }}   // Final animation values
      transition={{ duration: 0.8, ease: "easeInOut" }} // Animation settings
      className="flex flex-col md:flex-row items-center md:-translate-y-16 ml-14 -z-10 lg:-translate-y-24"
    >
      {/* Left Content */}
      <motion.div // Wrap the left content with motion.div
        initial={{ opacity: 0, x: -50 }} // Initial animation values
        animate={{ opacity: 1, x: 0 }}   // Final animation values
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }} // Add delay
        className="md:w-1/2 md:translate-y-9"
      >
        <h1>Lorem ipsum dolor sit amet</h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
          elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
          morbi libero imperdiet neque. Justo suspendisse tristique posuere quis
          eget viverra. Nunc euismod ultrices etiam nulla habitasse.
        </p>
        <div className="flex space-x-2">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className={`p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md w-64`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-md transtion hover:-translate-y-2 hover:scale-105">
              Submit &rarr;
            </button>
          </form>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="text-sm text-gray-500 mt-2">No credit card required!</p>
      </motion.div>

      {/* Right Image */}
      <motion.div // Wrap the image with motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Initial animation values
        animate={{ opacity: 1, scale: 1 }}   // Final animation values
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }} // Add delay
      >
        <Image
          height={700}
          width={900}
          src={"/img-1.png"}
          alt="Bikers"
          className="rounded-lg shadow-lg md:clip-path-my-custom-shape h-2/3 md:-translate-y-24"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;