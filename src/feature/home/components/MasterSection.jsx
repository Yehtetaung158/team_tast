import React from "react";
// import lines from "../../../assets/HomeIMG/lines.png";

const MasterSection = () => {
  const topics = [
    {
      id: 1,
      title: "Explore ideas together",
      content:
        "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
    {
      id: 2,
      title: "Bring those ideas to life",
      content:
        "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
    {
      id: 3,
      title: "Ship better outcomes",
      content:
        "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
  ];

  return (
    <div className="px-10 py-[20px]">
      <div className="space-y-10 text-center">
        <div>
          <button
            type="button"
            className="mb-2 me-2 rounded-[20px] border border-HLHeaderColor px-5 py-2.5 text-center text-sm font-medium text-paragraphColor hover:bg-HLHeaderColor hover:text-white focus:outline-none focus:ring-4 focus:ring-HLHeaderColor"
          >
            Masterful Design
          </button>
        </div>
        <div>
          <h1 className="bitter max-lg:text-3xl max-md:text-2xl lg:text-fontSizeHeader">
            Work <span className="text-HLHeaderColor">Together</span> With Team
          </h1>
        </div>
        <div className="mx-auto lg:w-1/2">
          <p className="text-sm text-paragraphColor lg:text-fontSizeParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            facilis aliquam culpa suscipit esse sequi adipisci voluptate
            expedita, incidunt pariatur.
          </p>
        </div>
      </div>
      <div className="lg:flex items-center justify-center  bg-[#f9fbf8b2] mt-10 space-y-10 ">
        <div className="w-fit mx-auto">
        <img src={require("../../../assets/HomeIMG/lines.png")} alt="" />

        </div>

        <div className=" flex flex-col justify-center items-center gap-10 leading-4 ">
          {topics.map((topic) => {
            return (
              <div key={topic.id} className="sm:w-1/2  flex justify-end items-start gap-[16px]  p-3  ">
                
                  <h3 className="rounded-full w-10 h-5 p-1 text-paragraphColor bg-[#CAFA9B] flex justify-center items-center">{topic.id}</h3>
                
                <div className="space-y-5"> 
                  <h3 className=" text-[#7CDC1D] bitter ">{topic.title}</h3>
                  <p className="text-paragraphColor text-sm ">{topic.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MasterSection;
