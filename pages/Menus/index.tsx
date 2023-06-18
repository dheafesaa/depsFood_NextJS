import React from 'react';
import Image from 'next/image';
import goals1 from 'assets/images/goals1.jpg';
import fireIcon from 'assets/icons/fire.png';

const Menus = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-6">
      <div className="flex px-4">
        <div className="text-2xl font-bold">Recommendation Menu</div>
        <Image src={fireIcon} width={32} height={42} alt="Fire Icon" />
      </div>
      <div className="flex flex-wrap justify-between py-6">
        <div className="w-full sm:w-1/2 lg:w-1/5 px-4 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="rounded-t-lg" src={goals1} alt="" />
            <div className="p-5">
              <div className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Vegetable Salad
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/5 px-4 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="rounded-t-lg" src={goals1} alt="" />
            <div className="p-5">
              <div className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Vegetable Salad
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/5 px-4 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="rounded-t-lg" src={goals1} alt="" />
            <div className="p-5">
              <div className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Vegetable Salad
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/5 px-4 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="rounded-t-lg" src={goals1} alt="" />
            <div className="p-5">
              <div className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Vegetable Salad
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/5 px-4 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="rounded-t-lg" src={goals1} alt="" />
            <div className="p-5">
              <div className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Vegetable Salad
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button
          type="button"
          className="text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default Menus;
