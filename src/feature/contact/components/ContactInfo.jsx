import React from "react";

const ContactInfo = ({ image, text1, text2 }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 w-full h-[350px] sm:w-[350] lg:w-[400px]">
      <img src={image} alt="" className="mb-2" />
      <h3 className="text-fontSizeParagraph font-bold text-center text-grayShades-60">
        {text1}
      </h3>
      <p className="text-paragraphColor font-paragraph_style text-fontSizeParagraph text-center">
        {text2}
      </p>
    </div>
  );
};

export default ContactInfo;
