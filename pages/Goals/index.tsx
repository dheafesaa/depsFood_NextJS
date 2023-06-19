import React from 'react';
import Image from 'next/image';
import goals1 from 'assets/images/goals1.jpg';
import goals2 from 'assets/images/goals2.jpg';

const Goals = () => {
  return (
    <section className="bg-white max-w-screen-xl flex flex-col lg:flex-row mx-auto p-4 py-8">
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
      <div className="w-full lg:w-1/2 bg-blue-600">
        <div className="">We Help Reach Your </div>
      </div>
    </section>
  );
};

export default Goals;
