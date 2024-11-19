import React from "react";

const MailSection = () => {
  return (
    <section className=" flex flex-col items-center justify-center my-10">
      <div className=" flex items-center justify-around gap-12 w-full py-6">
        <div className=" flex flex-col ">
          <h1 className=" lg:text-[40px] text-[20px] font-semibold">5M+</h1>
          <p className=" text-fontSizeLable text-grayShades.30">Customer</p>
        </div>
        <div className=" flex flex-col ">
          <h1 className=" lg:text-[40px] text-[20px] font-semibold">280M</h1>
          <p className=" text-fontSizeLable text-grayShades.30">Coverage</p>
        </div>
        <div className=" flex flex-col ">
          <h1 className=" lg:text-[40px] text-[20px] font-semibold">22%</h1>
          <p className=" text-fontSizeLable text-grayShades.30">Earnings</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full border-2 px-6 py-12 rounded-lg">
        <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
          <h1 className="font-miniHeader_style text-paragraphColor">
            Up To Date
          </h1>
          <h1 className="font-header_style font-semibold text-HLHeaderColor text-2xl">
            Subscribe and get a reward!
          </h1>
          <p className="text-paragraphColor">
            Join our community of subscribers and receive regular updates
            delivered straight to your inbox. It's quick, easy, and free.
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-3 mt-0 sm:mt-6">
          <input
            className="rounded-full border border-grayShades.30 px-4 py-2"
            type="text"
            placeholder="Your mail id...."
          />
          <button className="px-4 py-2 rounded-full bg-lableColor text-white">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default MailSection;
