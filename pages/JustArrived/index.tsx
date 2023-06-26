import React from 'react';
import Image from 'next/image';
import deliciousFood from 'assets/icons/deliciousFood.png';
import calories from 'assets/icons/calories.png';
import nutritions from 'assets/icons/nutrition.png';

const JustArrived = () => {
  return (
    <section className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8">
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
        <div className="flex items-center p-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
          <div className="flex bg-orange-400 p-4 rounded-lg">
            <Image
              className="object-cover"
              width={128}
              height={128}
              src={deliciousFood}
              alt="Delicious Food"
            />
          </div>
          <div className="flex flex-col justify-between px-4 leading-normal">
            <div className="text-base font-bold tracking-tight text-zinc-700">
              Delicious Food
            </div>
            <div className="mb-3 text-sm text-zinc-500 text-justify">
              Explore a world of diverse flavors, spices, and culinary
              traditions, making each meal an exciting adventure for your
              palate.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
        <div className="flex  items-center p-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
          <div className="flex bg-orange-400 p-4 rounded-lg">
            <Image
              className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
              width={128}
              height={128}
              src={calories}
              alt="Calories"
            />
          </div>
          <div className="flex flex-col justify-between px-4 leading-normal">
            <div className="text-base font-bold tracking-tight text-zinc-700">
              Control Calories
            </div>
            <div className="mb-3 text-sm text-zinc-500 text-justify">
              Relish in the incredible tastes of healthy ingredients, and you
              can control calories without sacrificing culinary enjoyment.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
        <div className="flex items-center p-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
          <div className="flex bg-orange-400 p-4 rounded-lg">
            <Image
              className="object-cover rounded-t-lg  md:rounded-none md:rounded-l-lg"
              width={128}
              height={128}
              src={nutritions}
              alt="Nutritions"
            />
          </div>
          <div className="flex flex-col justify-between px-4 leading-normal">
            <div className="text-base font-bold tracking-tight text-zinc-700">
              Boost Your Energy
            </div>
            <div className="mb-3 text-sm text-zinc-500 text-justify">
              Discover mouthwatering dishes that fuel your body with vital
              nutrients, providing sustained energy throughout the day.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JustArrived;
