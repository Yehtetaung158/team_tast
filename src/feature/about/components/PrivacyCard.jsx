import React from "react";

const PrivacyCard = () => {
  return (
    <div className="flex w-[800px] mx-auto items-center justify-between p-6 rounded-lg shadow-md bg-gray-50 border border-gray-200">
      <div>
        <p className="text-sm text-gray-500 mb-1">Seamless Interaction</p>
        <h2 className="text-2xl font-semibold text-black">
          <span className="text-lableColor">Protecting your data</span> with
          utmost tech, empowering you with privacy everywhere
        </h2>
      </div>
      <button className="px-4 text-nowrap py-2 bg-lableColor rounded-full ">
        Live Demo
      </button>
    </div>
  );
};

export default PrivacyCard;
