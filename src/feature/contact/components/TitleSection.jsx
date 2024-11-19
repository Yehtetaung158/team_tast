import React from "react";
import Bubble from "../../../assets/ContactImg/Bubble.png";
import BreadCrumb from "../../../components/Breadcrumb";

const TitleSection = () => {
  return (
    <header className="bg-gradient-to-b from-[#d7d5c800] via-[#ddf6c5] to-[#b8c8dc] bg-[length:100%_100%] bg-[position:0px_0px] min-h-[570px] w-full flex flex-col items-center justify-center pb-8">
      <h1 className="text-headerColor font-header_style font-bold text-fontSizeHeader">
        Contact Us
      </h1>
      <div className="w-full flex justify-center mb-1">
        <BreadCrumb
          currentPageTitle="Contact Us"
          className="mx-auto text-subHeaderColor font-header_style font-bold text-fontSizeMiniHeader"
        />
      </div>
      <div className="w-full flex justify-center">
        <img src={Bubble} alt="Decorative" className="w-64 h-48 rounded" />
      </div>
    </header>
  );
};

export default TitleSection;
