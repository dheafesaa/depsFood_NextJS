import React from 'react';
import Image from 'next/image';
import goals1 from 'assets/images/goals1.jpg';
import goals2 from 'assets/images/goals2.jpg';

const Goals = () => {
  return (
    <section className="bg-white max-w-screen-xl flex flex-col lg:justify-between lg:flex-row mx-auto p-4 py-8">
      <div className="w-full lg:w-1/2 flex flex-col">
        <Image
          className="object-contain rounded-xl w-60 lg:w-96"
          src={goals1}
          alt="Goals 1 Image"
        />
        <div className="flex justify-end -mt-4 lg:-mt-10">
          <Image
            className="object-contain rounded-xl w-60 lg:w-96"
            src={goals2}
            alt="Goals 2 Image"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:pl-24 mt-12 lg:mt-0">
        <div className="flex flex-col">
          <div className="text-3xl md:text-4xl xl:text-5xl font-bold text-zinc-700 tracking-tight">
            We Help Reach Your Fitness & Goals With Food Program
          </div>
          <div className="text-justify py-6 font-medium">
            <div className="text-base text-zinc-500 mb-4">
              Welcome to our healthy program tailored to your specific goals and
              dietary needs. We offers personalized meal plans and recipes,
              ensuring a seamless fit into your lifestyle and preferences. Gain
              valuable knowledge about nutrition, cooking techniques, and food
              choices, empowering you to make informed decisions and sustain
              your healthy habits beyond the program.
            </div>
            <div className="text-base text-zinc-500">
              Our healthy food program is designed for long-term success,
              helping you establish sustainable habits that promote lasting
              health and wellness.
            </div>
          </div>
          <button
            type="button"
            className="text-orange-400 text-base bg-orange-100 font-medium rounded-lg px-3 lg:px-5 py-2.5 focus:outline-none"
          >
            Say goodbye to quick fixes and yo-yo diets
          </button>
        </div>
      </div>
    </section>
  );
};

export default Goals;
