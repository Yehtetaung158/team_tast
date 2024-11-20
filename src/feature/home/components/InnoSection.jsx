import React from "react";
import arrow from "../../../assets/HomeIMG/arrow.png";
import innoImg from "../../../assets/HomeIMG/inno.png";

const InnoSection = () => {
  return (
    <div className=" lg:flex justify-center items-center px-16 py-16 bg-[#f9fbf8b2]">
      <div className="space-y-10 mx-auto ">
        <div className="w-fit max-lg:mx-auto">
          <button
            type="button"
            className="mb-2 me-2 rounded-[20px] border border-HLHeaderColor px-5 py-2.5 text-center text-sm font-medium text-paragraphColor hover:bg-HLHeaderColor hover:text-white focus:outline-none focus:ring-4 focus:ring-HLHeaderColor"
          >
            Next Level Innovation
          </button>
        </div>
        <div>
          <h1 className="bitter text-[20px] md:text-[35px] lg:text-[50px] max-lg:text-center">
            Demonstrate branding consequently{" "}
            <span className="text-HLHeaderColor">think</span> outside
          </h1>
        </div>
        <div>
          <p className="text-sm text-paragraphColor lg:text-fontSizeParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            facilis
          </p>
        </div>
        <div className=" lg:w-1/2 flex gap-3 ">
            <img src={arrow} className="w-[25px] h-[20px] lg:w-[25px]" alt="" />
          <p className=" text-sm lg:text-lg text-paragraphColor ">
          Enterprise-grade security
          </p>
        </div>
        <div className="lg:w-1/2 flex gap-3 ">
            <img src={arrow} className="w-[25px] h-[20px] lg:w-[25px]]" alt="" />
          <p className="text-sm lg:text-lg text-paragraphColor ">
          99.9% guaranteed uptime SLA
          </p>
        </div>
        <div className=" lg:w-1/2 flex gap-3 ">
            <img src={arrow} className="w-[25px] h-[20px] lg:w-[25px]" alt="" />
          <p className="text-sm lg:text-lg text-paragraphColor ">
          Designated customer success team
        </p>
        </div>
      </div>

      <div className="">
        <img src={innoImg} className="w-[800px]" alt="" />
      </div>
    </div>
  );
};

export default InnoSection;
