import React from "react";
import img1 from "../../../assets/HomeIMG/heroIMG.png";
import img2 from "../../../assets/HomeIMG/kite.png";
import { MoveRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col homebg text-center p-5 relative">
      <div className="lg:w-1/2 mx-auto py-[80px] space-y-[50px]">
        <div className="font-miniHeader_style text-sm md:text-fontSizeMiniHeader text-paragraph">
          <h5>The Art of UI Design</h5>
        </div>
        <div className="bitter max-md:text-2xl max-lg:text-3xl lg:text-fontSizeHeader">
          <h1 className="lg:whitespace-nowrap lg:leading-[70px]">
            Come for the features of it.
            <br />
            Stay for <span className="text-HLHeaderColor">best ever</span> help.
          </h1>
        </div>
        <div className="text-center text-sm lg:text-fontSizeParagraph text-paragraph px-16">
          <p>
            We’ve been told it is possible to revolutionize the payment
            industry. We have not reinvented the wheel, we decide.
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-5">
          <button
            type="button"
            className="text-paragraph hover:text-white border border-HLHeaderColor hover:bg-HLHeaderColor font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-150"
          >
            Learn More
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-HLHeaderColor hover:text-paragraph hover:bg-white border hover:border-HLHeaderColor font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-150"
          >
            Get Started <MoveRight className="size-5 inline-flex ml-2" />
          </button>
        </div>
        <div className="mx-auto">
          <img src={img1} alt="Hero Section Image" />
        </div>
      </div>
      <div className="w-fit h-fit max-lg:hidden absolute right-32 top-[350px]">
        <img src={img2} alt="Decorative Kite" />
      </div>
    </div>
  );
};

export default HeroSection;
