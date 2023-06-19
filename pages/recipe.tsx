import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';
import Popup from './Popup';
import recipe from 'assets/icons/recipe.png';
import goals1 from 'assets/images/goals1.jpg';

const Recipe = () => {
  const [showModal, setShowModal] = useState(false);

  const openPopup = () => {
    setShowModal(true);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl flex flex-wrap mx-auto py-6">
        <div className="flex justify-between w-full items-center px-4">
          <div className="flex">
            <div className="text-2xl font-bold">Recipes Food</div>
            <Image
              className="ml-1"
              src={recipe}
              width={38}
              height={38}
              alt="Fire Icon"
            />
          </div>
          <button
            type="button"
            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-500 font-medium rounded-lg px-6 py-2 focus:outline-none"
            onClick={openPopup}
          >
            Add Recipe
          </button>
        </div>
        <div className="flex flex-wrap justify-between py-6">
          <div className="w-full sm:w-1/2 lg:w-1/5 px-4 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image className="rounded-t-lg" src={goals1} alt="" />
              <div className="p-5">
                <div className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Vegetable Salad
                </div>
                <p className="mb-3 text-justify font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
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
                <p className="mb-3 text-justify font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
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
                <p className="mb-3 text-justify font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
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
                <p className="mb-3 text-justify font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
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
                <p className="mb-3 text-justify font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Popup showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Recipe;
