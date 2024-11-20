import React from "react";
import b1 from "../../../assets/HomeIMG/B1.png";
import b2 from "../../../assets/HomeIMG/B2.png";
import b3 from "../../../assets/HomeIMG/B3.png";
import BlogCard from "./BlogCard";


const BlogSection = () => {

  const blogs = [
    {
      id : 1 ,
      title : "Faster ways to reach your customers and their needs.",
      content : "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital divide.",
      img : b1 ,
      catergory : "Development",
      href : "#",
      date: "2 Apr. 2023"
    },
    {
      id : 2 ,
      title : "Gestalt psychology in UI/UX design and beyond.",
      content : "Bring to the table win-win strategies to proactive domination. At the end of the day, going forward.",
      img : b2 ,
      catergory : "Design",
      href : "#",
      date: "2 Apr. 2023"
    },
    {
      id : 3 ,
      title : "Organize your digital assets with a new methodology.",
      content : "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      img : b3 ,
      catergory : "Marketing",
      href : "#",
      date: "2 Apr. 2023"
    }

  ];

  return (
    <div className="px-10 py-[20px]">
      <header>
        <div className="space-y-10 text-center">
          <div>
            <button
              type="button"
              className="mb-2 me-2 rounded-[20px] border border-HLHeaderColor px-5 py-2.5 text-center text-sm font-medium text-paragraphColor hover:bg-HLHeaderColor hover:text-white focus:outline-none focus:ring-4 focus:ring-HLHeaderColor"
            >
              Magic Unleashed
            </button>
          </div>
          <div>
            <h1 className="bitter max-lg:text-3xl max-md:text-2xl lg:text-fontSizeHeader">
              A New Era of Design{" "}
              <span className="text-HLHeaderColor">Excellence </span>
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
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {blogs.map((blog) => (
           <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogSection;
