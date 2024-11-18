import React from "react";

const BlogRatinSection = () => {
  return (
    <section>
      <div>
        <h1 className=" text-headerColor font-header_style font-bold text-fontSizeHeader text-center">
          Over 16.000 + companies{" "}
          <span className="text-HLHeaderColor">trust</span> our services and
          they are optimistic that they will be the best in the world.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor text-[25px]">Amazon</h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor text-[25px]">
            Creative Canvas Co.
          </h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor text-[25px]">InnovativeDesign</h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor text-[25px]">CreaTech Design</h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor text-[25px]">
            ArtisanAxis Design
          </h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor text-[25px]">
            ArtisanAxis Design
          </h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor text-[25px]">VisionaryVista</h1>
        </div>
        <div className="bg-cardBgColor w-full text-center py-5 rounded">
          <h1 className="text-paragraphColor text-[25px]">
            PixelPerfection Studios
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BlogRatinSection;
