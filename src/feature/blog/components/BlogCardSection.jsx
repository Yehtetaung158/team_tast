import React from "react";
import OutLineBtn from "../components/OutLineBtn";
import card1Img from "../../../assets/BlogImg/Lines.png";
import card2Img from "../../../assets/BlogImg/Switch.png";
import card3Img from "../../../assets/BlogImg/Lines(1).png";
import card4Img from "../../../assets/BlogImg/Wreframeplaceholder.png";
import card5Img from "../../../assets/BlogImg/Wreframeplaceholder.png";
import card6Img from "../../../assets/BlogImg/Switch(1).png";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="my-8 flex flex-col gap-4">
      {/* header  */}
      <div className="flex flex-col items-center">
        <OutLineBtn text="Our Events" />
        <h1 className="font-header_style text-fontSizeMobileHeader font-bold text-headerColor lg:text-fontSizeHeader">
          Engagement Initiatives and{" "}
          <span className="text-HLHeaderColor">Activities</span>
        </h1>
        <p className="text-fontSizeMobileParagraph text-paragraphColor lg:text-fontSizeMiniHeader">
          Where creativity meets collaboration: Inspiring design through shared
          passion and innovation.
        </p>
      </div>
      <div className="grid-col-3 my-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cardsData.map((card) => (
          <motion.div
            key={card.id}
            className="col-span-1 mx-auto w-full max-w-sm rounded-lg border border-gray-200 shadow dark:border-gray-700 dark:bg-gray-800"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a href="#">
              <img className="rounded-t-lg" src={card.img} />
            </a>
            <div className="space-y-4 p-5">
              <div className="mb-2 flex gap-3">
                <span className="w-fit rounded bg-lableColor px-2 py-1 text-fontSizeLable text-lableFontColor">
                  Development
                </span>
                <span className="text-fontSizeLable text-lableColor">
                  2 Apr. 2023
                </span>
              </div>
              <a href="#">
                <h5 className="mb-2 font-header_style text-2xl font-bold tracking-tight text-cardHeaderColor">
                  {card.title}
                </h5>
              </a>
              <p className="mb-3 text-fontSizeMobileParagraph font-normal text-paragraphColor lg:text-fontSizeParagraph">
                {card.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 text-fontSizeMobileParagraph text-paragraphColor hover:text-HLHeaderColor lg:text-fontSizeParagraph"
              >
                Read more
                <ArrowRight />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogCardSection;
