import React from "react";

const BusinessSection = () => {
  return (
    <section className="mx-auto mb-3 text-center">
      <h2 className="text-header text-4xl font-bold text-center mb-2">
        Want to know how we can help <br /> your business
      </h2>

      <button
        type="button"
        className="text-white text-md mt-6 bg-greenShades-40 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full  px-5 py-2.5 text-center mx-auto mb-4 dark:focus:ring-yellow-900"
      >
        Start a project with us
      </button>
    </section>
  );
};

export default BusinessSection;
