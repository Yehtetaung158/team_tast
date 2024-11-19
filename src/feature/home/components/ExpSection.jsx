import React from "react";
import ExpCard from "./ExpCard";
import a1 from "../../../assets/HomeIMG/avatar1.png";
import a2 from "../../../assets/HomeIMG/avatar2.png";
import a3 from "../../../assets/HomeIMG/avatar3.png";
import blockfooter from "../../../assets/HomeIMG/blockfooter.png"

const ExpSection = () => {
  const Users = [
    {
      id: 1,
      img: a1,
      title: "Wireless",
      content: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
      href: "#",
    },
    {
      id: 2,
      img: a2,
      title: "Synergistic",
      content: "Neque ut integer nulla tellus semper amet id scelerisque eros.",
      href: "#",
    },
    {
      id: 3,
      img: a3,
      title: "Distributed",
      content: "Aliquet et cras nam sed mauris laoreet bibendum et.",
      href: "#",
    },
  ];

  return (
    <div className="bg-[#f9faff]  px-10 py-[100px] flex flex-col gap-5  ">
      <div className="space-y-10 text-center">
        <div>
          <button
            type="button"
            className="text-paragraphColor hover:text-white border border-HLHeaderColor hover:bg-HLHeaderColor focus:ring-4 focus:outline-none focus:ring-HLHeaderColor font-medium rounded-[20px] text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            The Best UI
          </button>
        </div>
        <div>
          <h1 className="  max-md:text-2xl max-lg:text-3xl lg:text-fontSizeHeader bitter">
            Crafting <span className="text-HLHeaderColor">Seamless</span>{" "}
            Experiences
          </h1>
        </div>
        <div className=" lg:w-1/2 mx-auto">
          <p className="text-sm lg:text-fontSizeParagraph text-paragraphColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            facilis aliquam culpa suscipit esse sequi adipisci voluptate
            expedita, incidunt pariatur.
          </p>
        </div>
      </div>
      
      <div className="lg:flex gap-5 mt-10 group">
        {Users.map((user) => (
          <ExpCard key={user.id} user={user}  />
        ))}
      </div>
      <div className="mt-5">
        <img src={blockfooter} alt="" />
      </div>
    </div>
  );
};

export default ExpSection;
