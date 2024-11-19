import React from "react";

const ContactForm = ({ Profile }) => {
  return (
    <form className="w-full px-8 flex flex-col h-full">
      <div className="mb-5">
        <h1 className="mb-3 text-header font-bold">Get In Touch</h1>
        <p className="text-subHeader">Our team would love to hear from you.</p>
      </div>

      {/* Name Fields */}
      <div className="mb-5 flex space-x-4">
        <div className="w-full">
          <label
            htmlFor="first-name"
            className="block mb-2 text-sm font-medium text-grayShades-base dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-grayShades-base text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="John"
            required
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="last-name"
            className="block mb-2 text-sm font-medium text-grayShades-base dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-grayShades-base text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Doe"
            required
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@gmail.com"
          required
        />
      </div>

      {/* Message Field */}
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Message
      </label>
      <textarea
        id="message"
        rows="6"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your message"
        required
      ></textarea>

      {/* Submit Button */}

      <button
        type="button"
        className="text-white text-md mt-auto bg-greenShades-40 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full  px-5 py-2.5 text-center mx-auto mb-4 dark:focus:ring-yellow-900"
      >
        Submit Now
      </button>
    </form>
  );
};

export default ContactForm;
