import React from "react";
import secondImg from "../../../assets/AboutImg/secondImg.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const SecondSection = () => {
  return (
    <section className="w-[1100px] flex mx-auto">
      <div className="grid grid-cols-2 items-end ">
        <div className="col-span-1 mt-10">
          {" "}
          <button
            type="button"
            class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:text-lableColor dark:focus:ring-green-800"
          >
            About Us
          </button>
          <div className=" text-4xl font-bold">
            <span>We always make</span>
            <div className="text-lableColor">The Best</div>
          </div>
          <div className="mt-4">
            We have honed our skill to deliver outstanding results tailored to
            meet your university business needs.Whether you're looking to
            refresh your brand identity, create captivating marketing materials,
            or build a stunning website,we are here to bring your vision to
            life.
          </div>
          <button
            type="button"
            className=" mt-4 mb-4 text-white inline-flex items-center gap-3 bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Contact us
            <ioiosarrowroundforward classname="size-5"></ioiosarrowroundforward>
          </button>
        </div>
        <div className="col-span-1">
          <img src={secondImg} alt="" className="w-[400px]" />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
