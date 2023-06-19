import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import messageImage from 'assets/images/messageImage.png';

const Messages = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-8 px-4">
      <div className="w-full flex items-center px-4 lg:px-8 bg-red-500 rounded-lg shadow py-8 lg:py-0">
        <div className="flex flex-col w-full lg:w-3/5">
          <div className="w-full lg:max-w-3xl text-white">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold tracking-tight">
              Visit My Account GitHub To Get Latest Code
            </h1>
            <p className="py-8 font-normal">
              Connecting with my GitHub account will keep you updated on my
              coding journey, projects, and any exciting developments in the
              world of software development.{' '}
            </p>
          </div>
          <Link
            href="https://github.com/dheafesaa/depsFood_NextJS"
            className="max-full lg:max-w-xs inline-flex justify-center items-center p-2 text-base font-normal text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100"
          >
            <svg
              className="w-10 h-10 mr-2"
              fill="currentColor"
              viewBox="0 0 22 22"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="w-full">Get started to connect with me-!</span>
            <svg
              aria-hidden="true"
              className="w-6 h-6 ml-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="hidden lg:w-2/5 lg:flex lg:justify-end">
          <Image
            className="object-cover"
            src={messageImage}
            alt="Message Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Messages;
