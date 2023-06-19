import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import me from 'assets/images/me.jpeg';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 py-6">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
            src={me}
            alt="Me"
          />
          <div className="flex flex-col justify-between px-4 leading-normal max-w-2xl py-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Dhea Fesa Athallah
            </h5>
            <p className="mb-2 font-normal text-justify text-gray-700">
              Hi-! I'm tech enthusiasts with experience specializing in web
              development, user interface design, HTML, and React JS. Beyond the
              technical skills, as frontend developer I have possesses a passion
              for creating aesthetically pleasing and user-centric experiences.
              I should keep up with the latest trends and best practices in
              frontend development, continuously expanding their knowledge and
              skills. Also strive for clean and maintainable code, optimizing
              performance and ensuring scalability.
            </p>
            <ul className="max-w-md space-y-1 text-gray-500 list-inside">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Web application development
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Creative problem solving skills
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                JIRA, Git, HTML, JavaScript, React JS, Next JS
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                CSS, SCSS, SASS, Bootstrap, Tailwind, Material UI, Ant Design
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Maintain, update, and improve existing websites
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
