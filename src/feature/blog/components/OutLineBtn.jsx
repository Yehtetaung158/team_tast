import React from "react";

const OutLineBtn = ({ text }) => {
  return (
    <button className="px-6 py-2 border-2 border-[#E9F791] font-semibold text-lg rounded-full hover:bg-[#E9F791]  transition-all duration-300 bg-white text-paragraphColor">
      {text}
    </button>
  );
};

export default OutLineBtn;
