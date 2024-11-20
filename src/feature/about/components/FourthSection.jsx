import React from "react";

const FourthSection = () => {
  return (
    <section className="text-center mt-14 ">
      {" "}
      <button
        type="button"
        class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:text-lableColor dark:focus:ring-green-800"
      >
        Benefits
      </button>
      <div className="text-4xl font-bold">
        <span style={{ marginRight: "8px" }}>Why</span>
        <span className="text-lableColor">Choose US</span>
      </div>
      <p className="mt-4">
        Applying our values is what helps us thrive, enjoy what <br /> we do,
        and ship our best work.
      </p>
    </section>
  );
};

export default FourthSection;
