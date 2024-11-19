import React from "react";

const BlogRatingSection = () => {
  return (
    <section>
      <div >
        <h1 className=" text-headerColor font-header_style font-bold  lg:text-fontSizeHeader text-fontSizeMobileHeader text-center">
          Over 16.000 + companies{" "}
          <span className="text-HLHeaderColor">trust</span> our services and
          they are optimistic that they will be the best in the world.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10  px-2">
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor lg:text-[25px] text-[20px]">Amazon</h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor lg:text-[25px] text-[20px]">
            Creative Canvas Co.
          </h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor lg:text-[25px] text-[20px]">InnovativeDesign</h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor lg:text-[25px] text-[20px]">CreaTech Design</h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor lg:text-[25px] text-[20px]">
            ArtisanAxis Design
          </h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor lg:text-[25px] text-[20px]">
            ArtisanAxis Design
          </h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor lg:text-[25px] text-[20px]">VisionaryVista</h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor lg:text-[25px] text-[20px]">
            PixelPerfection Studios
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BlogRatingSection;
