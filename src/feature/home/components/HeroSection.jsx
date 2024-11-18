import React from "react";
import img1 from "../../../assets/HomeIMG/heroIMG.png";
import img2 from "../../../assets/HomeIMG/kite.png"
import { MoveRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className=" w-full flex flex-col homebg text-center p-2 ">
      <div className="lg:w-1/2  mx-auto py-[80px] space-y-[24px] ">
        <div className="font-miniHeader text-paragraph">
          <h5>The Art of UI Design</h5>
        </div>
        <div className=" bitter text-[40px] lg:text-[60px]">
          <h1>
            Come for the features of it. Stay for
            <span className=" text-HLHeader "> best ever </span>
            help.
          </h1>
        </div>
        <div className=" text-center text-sm lg:text-md text-paragraph px-16">
          <p>
            We’ve been told it is possible to revolutionize the payment
            industry. We have not reinvented the wheel, we decide
          </p>
        </div>
        <div className="w-[289px] h-[46px] flex gap-5 items-center justify-center mx-auto  ">
          <button

            type="button"
            className="text-paragraph hover:text-white border border-HLHeader hover:bg-HLHeader font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  transition-all duration-150 delay-75"
          >
            Learn More
          </button>
          <button
            type="button"
            className="focus:outline-none text-white hover:text-paragraph bg-HLHeader hover:bg-white border hover:border-HLHeader  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  transition-all duration-150 delay-75"
          >
            Get Start <MoveRight className="size-5 inline-flex gap-2" />
          </button>
        </div>
        <div className="mx-auto ">
          <img src={img1}></img>
        </div>
      </div>
      <div className="inline-flex justify-end max-md:hidden lg:-translate-y-[600px] lg:-translate-x-40">
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
