import React from "react";

const MailSection = () => {
  return (
    <div className="lg:p-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:border rounded-lg shadow-lg bg-[#F9FBF8B2]items-center p-16 space-y-10 hover:shadow-2xl transition-all ease-in-out duration-150 delay-75">
        
        <div>
          <h5 className=" font-miniHeader_style text-fontSizeParagraph text-paragraphColor">Seamless Interaction</h5>
          <h3 className="text-md text-fontSizeMiniHeader font-bold bitter">
            <span className="text-HLHeaderColor">Welcome</span> to your new digital reality that which will rock your world.
          </h3>
          <p className=" text-sm lg:text-md text-paragraphColor pt-5">
            Let us help you take you from zero to serious business and beyond.
            Our no-strings attached free trial lets you test our product today.
          </p>
        </div>
        <div className="mx-auto max-w-sm">
          <div className="relative">
            <input
              type="text"
              
              className="w-full rounded-md border bg-white px-4 py-2 pr-20 "
            />
            <button
              type="submit"
              className="absolute bottom-0 right-0 top-0 rounded-r-md text-sm bitter bg-lableColor  px-4 text-white hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailSection;
