"use client";

import Image from "next/image";
import * as yup from 'yup';
import { useState } from 'react';

interface Props {
  anyNonNullishValue?: object; // Changed to a more specific type
}

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
});

const Hero: React.FC<Props> = ({  }) => {
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
    <section className="flex flex-col md:flex-row items-center md:-translate-y-16 ml-14 -z-10 lg:-translate-y-24">
      {/* Left Content */}
      <div className="md:w-1/2 md:translate-y-9">
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
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Submit &rarr;
            </button>
          </form>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="text-sm text-gray-500 mt-2">No credit card required!</p>
      </div>

      {/* Right Image */}
      <div>
        <Image
          height={700}
          width={900}
          src={"/img-1.png"}
          alt="Bikers"
          className="rounded-lg shadow-lg md:clip-path-my-custom-shape h-2/3"
        />
      </div>
    </section>
  );
};

export default Hero;
