import React from "react";
import OutLineBtn from "../components/OutLineBtn";
import card1Img from "../../../assets/BlogImg/Lines.png";
import card2Img from "../../../assets/BlogImg/Switch.png";
import card3Img from "../../../assets/BlogImg/Lines(1).png";
import card4Img from "../../../assets/BlogImg/Wreframeplaceholder.png";
import card5Img from "../../../assets/BlogImg/Wreframeplaceholder.png";
import card6Img from "../../../assets/BlogImg/Switch(1).png";
import { ArrowRight } from "lucide-react";

const BlogCardSection = () => {
  const cardsData = [
    {
      id: 1,
      img: card1Img,
      title: "Creative Collaboration Workshops",
      description:
        "Fostering a space for creative minds to come together, share ideas, and spark innovation through teamwork.",
    },
    {
      id: 2,
      img: card2Img,
      title: "Design Thinking Bootcamps",
      description:
        "Hands-on workshops that focus on problem-solving through creative processes and innovative design methodologies.",
    },
    {
      id: 3,
      img: card3Img,
      title: "Innovation in Branding Strategies",
      description:
        "Developing forward-thinking branding strategies that resonate with audiences and set brands apart in a competitive market.",
    },
    {
      id: 4,
      img: card4Img,
      title: "User-Centered Design Principles",
      description:
        "Applying user-focused design principles to create intuitive and impactful experiences that meet real-world needs.",
    },
    {
      id: 5,
      img: card5Img,
      title: "Interactive Product Prototyping",
      description:
        "Transforming ideas into interactive prototypes that demonstrate functionality and enhance user experience testing.",
    },
    {
      id: 6,
      img: card6Img,
      title: "Building Design Communities",
      description:
        "Creating supportive networks of designers who inspire, mentor, and collaborate to drive the future of design innovation.",
    },
  ];
  return (
    <section className=" my-8 flex flex-col gap-4">
      {/* header  */}
      <div className=" flex flex-col items-center">
        <OutLineBtn text="Our Events" />
        <h1 className=" text-headerColor font-header_style font-bold lg:text-fontSizeHeader text-fontSizeMobileHeader">
          Engagement Initiatives and{" "}
          <span className=" text-HLHeaderColor">Activities</span>
        </h1>
        <p className=" lg:text-fontSizeMiniHeader text-fontSizeMobileParagraph text-paragraphColor ">
          Where creativity meets collaboration: Inspiring design through shared
          passion and innovation.
        </p>
      </div>
      <div className="my-5 grid grid-col-3 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 col-span-1 w-full mx-auto"
          >
            <a href="#">
              <img className="rounded-t-lg" src={card.img} />
            </a>
            <div className="p-5 space-y-4">
              <div className=" flex gap-3 mb-2">
                <span className=" text-fontSizeLable text-lableFontColor bg-lableColor w-fit px-2 py-1 rounded">
                  Development
                </span>
                <span className=" text-lableColor text-fontSizeLable">
                  2 Apr. 2023
                </span>
              </div>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-cardHeaderColor font-header_style">
                  {card.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-fontSizeMobileParagraph lg:text-fontSizeParagraph text-paragraphColor">
                {card.description}
              </p>
              <a
                href="#"
                className=" lg:text-fontSizeParagraph text-fontSizeMobileParagraph  text-paragraphColor inline-flex gap-3 items-center justify-center hover:text-HLHeaderColor"
              >
                Read more
                <ArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCardSection;
