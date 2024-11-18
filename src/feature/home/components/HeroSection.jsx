import React from "react";
import img1 from "../../../assets/HomeIMG/heroIMG.png";
import img2 from "../../../assets/HomeIMG/kite.png";
import { MoveRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className=" w-full flex flex-col homebg text-center p-5 relative ">
      <div className="lg:w-1/2  mx-auto py-[80px] space-y-[24px] ">
        <div className="font-miniHeader_style text-paragraph">
          <h5>The Art of UI Design</h5>
        </div>
        <div className=" bitter text-[40px] lg:text-[60px]">
          <h1>
            Come for the features of it. Stay for
            <span className=" text-HLHeader "> best ever </span>
            help.
          </h1>
        </div>

        <div className=" text-center text-sm lg:text-md text-paragraph px-16 ">
          <p>
            We’ve been told it is possible to revolutionize the payment
            industry. We have not reinvented the wheel, we decide
          </p>
        </div>

        <div className="w-full flex justify-center items-center gap-5    ">
          <button
            type="button"
            className="text-HLHeaderColor border border-HLHeaderColor font-medium rounded-lg text-sm px-5 py-2.5  hover:bg-white hover:text-paragraphColor"
          >
            Learn More
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-HLHeaderColor font-medium rounded-lg text-sm px-5 py-2.5   transition-all duration-75  hover:text-HLHeaderColor hover:bg-white hover:border-HLHeaderColor"
          >
            Get Start <MoveRight className="size-5 inline-flex gap-2" />
          </button>
        </div>
        <div className="mx-auto ">
          <img src={img1}></img>
        </div>
      </div>
      <div className=" w-fit h-fit max-lg:hidden absolute right-32 top-[350px] ">
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
