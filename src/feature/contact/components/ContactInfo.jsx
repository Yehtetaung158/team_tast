import React from "react";

const ContactInfo = ({ icon, text1, text2 }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 w-full h-[300px] sm:w-[250px] lg:w-[300px]">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-center text-grayShades-100 ">
        {text1}
      </h3>
      <p className="text-grayShades-50 text-center">{text2}</p>
    </div>
  );
};

export default ContactInfo;
