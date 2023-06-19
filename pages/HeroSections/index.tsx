import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from 'assets/images/heroImage.png';

const HeroSections = () => {
  return (
    <section className="bg-white max-w-screen-xl flex flex-col items-center lg:flex-row mx-auto p-4 py-8 lg:py-0">
      <div className="w-full lg:w-1/2 flex items-center">
        <div className="mr-auto place-self-center lg:col-span-6">
          <button
            type="button"
            className="text-orange-400 bg-orange-100 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Healthy & Tasty Food
          </button>
          <h1 className="max-w-2xl mb-4 text-5xl text-zinc-700 font-bold tracking-tight leading-none md:text-6xl xl:text-7xl dark:text-white">
            <span className="text-orange-400">Eat Healthy</span> And <br /> Feel
            Great With <br /> Food Program
          </h1>
          <p className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8">
            We will help you in this exciting adventure of nourishing your body,
            energizing your life, and embracing the joy of eating healthy.
          </p>
          <Link href="/recipe">
            <button
              type="button"
              className="animate-bounce text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-500 font-medium rounded-lg px-10 py-3 mr-2 mb-2 focus:outline-none"
            >
              Start Now
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-end">
        <div className="max-w-lg p-6">
          <Image
            className="object-contain h-full w-full"
            src={heroImage}
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSections;
