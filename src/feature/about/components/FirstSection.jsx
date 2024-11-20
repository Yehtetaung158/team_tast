import React from "react";
import firstImg from "../../../assets/AboutImg/firstImg.png";
import bgImg from "../../../assets/AboutImg/Background.png";

const FirstSection = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <section className="flex flex-col items-center justify-center ">
        <p className="text-5xl font-bold text-center">About Us</p>
        <p className=" text-fontSizeMiniHeader text-paragraphColor text-center mt-2">
          <span>Home</span>
          <span> / </span>
          <span>About Us</span>
          <img src={firstImg} alt="" className="w-[700px]" />
        </p>
      </section>
    </div>
  );
};

export default FirstSection;
