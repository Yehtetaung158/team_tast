import React from 'react'
import heroSVG from "../../../assets/BlogImg/Lines.svg";
import { HiArrowRight } from "react-icons/hi";
import OutLineBtn from './OutLineBtn';

const BlogHeorSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFEF97] via-[#C7FC9D] to-[#C3DEFE] bg-[length:100%_100%] bg-[position:0px_0px] h-[770px] w-full flex flex-col items-center justify-center">
      <div className=" flex flex-col items-center justify-between">
        <h1 className=" text-headerColor font-header_style font-bold text-fontSizeHeader ">
          Our Blog
        </h1>
        <p className=" text-fontSizeMiniHeader text-paragraphColor">
          <span>Home</span>
          <span> / </span>
          <span>Blog</span>
        </p>
      </div>
      <div className=" flex items-center justify-between">
        <div className=" w-1/2 flex items-center justify-center">
          <img src={heroSVG} alt="" />
        </div>
        <div className=" w-1/2 space-y-2">
          <OutLineBtn text="Our Blog" />

          <h1 className="font-header_style font-bold text-fontSizeHeader text-headerColor">
            Welcome to <span className="text-lableColor">our blog</span>
          </h1>
          <p className=" text-fontSizeMiniHeader text-paragraphColor">
            Our blog is your resource for insightful articles, design trends,
            industry news, and tips to elevate your brand’s visual presence.Our
            blog aims to spark ideas and guide you through the dynamic world of
            design. 
          </p>
          <button className="px-6 py-2 rounded-lg font-semibold text-lg bg-gradient-to-b from-[#E9F791] to-[#B1EA68] hover:from-[#B1EA68] hover:to-[#E9F791] transition-all duration-300 text-paragraphColor flex gap-2 items-center justify-center">
            Explore
            <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogHeorSection