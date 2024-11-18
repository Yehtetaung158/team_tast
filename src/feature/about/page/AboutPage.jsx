import React from "react";
import { AiOutlineVideoCamera } from "react-icons/ai";

const AboutPage = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto mt-5">
        <h1 className="font-bold text-3xl">
          We've got an entire team dedicated to support you with your business .
        </h1>
        <p className="text-sm text-center mt-3">
          Get help 24/7,with out award-winning support network of payment
          experts
        </p>
        <div className="flex justify-center mt-5">
          <button
            type="button"
            class="text-gray-900 p-2 flex items-center justify-center gap-3 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            <AiOutlineVideoCamera className="text-2xl" />
            Book a call
          </button>
          <button
            type="button"
            class="text-white bg-black  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
