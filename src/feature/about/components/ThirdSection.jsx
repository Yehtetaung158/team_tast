import React from "react";
import thirdImg from "../../../assets/AboutImg/thirdImg.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const ThirdSection = () => {
  return (
    <section className="w-[1100px] mx-auto">
      <div className=" flex grid grid-cols-2 items-end ">
        <div className="col-span-1">
          <img src={thirdImg} alt="" className="w-[500px]" />
        </div>
        <div className="col-span-1">
          <button
            type="button"
            class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Our Story
          </button>
          <div className="text-4xl font-bold mb-4">
            <span style={{ marginRight: "8px" }}>How it</span>
            <span className="text-lableColor">started</span>
          </div>
          <p className="">
            Our journey began with a passion for creativity and a vision to
            transform ideas into captivating designs.Founded ( number of years)
            ago by (Founder's name) ,we started small,fueled by a deep
            commitment to craftsmanship and innovation in the design industry.
          </p>
          <button
            type="button"
            className="mb-14 mt-4 text-white inline-flex items-center gap-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read more
            <IoIosArrowRoundForward className="size-5 " />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
