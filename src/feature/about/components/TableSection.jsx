import React from "react";
import { ArrowRight } from "lucide-react";
import logo1 from "../../../assets/AboutImg/Logo1.png";
import logo2 from "../../../assets/AboutImg/Logo2.png";
import logo3 from "../../../assets/AboutImg/Logo3.png";
import logo4 from "../../../assets/AboutImg/Logo4.png";
import logo5 from "../../../assets/AboutImg/Logo5.png";
import logo6 from "../../../assets/AboutImg/Logo6.png";

const TableSection = () => {
  const services = [
    {
      image: <img src={logo1} alt="Development" />,
      title: "Development",
      description:
        "Developing Avely visuals through crafting high-quality web-based applications",
    },
    {
      image: <img src={logo2} alt="Development" />,
      title: "Development",
      description:
        "Developing Avely visuals through crafting high-quality web-based applications",
    },
    {
      image: <img src={logo3} alt="Development" />,
      title: "Branding",
      description:
        "Your brand is your identity, and I'm here to make it shine! From crafting captivating logos to defining your brand's",
    },
    {
      image: <img src={logo4} alt="Development" />,
      title: "User-Centered Approach",
      description:
        "We prioritize understanding your users' needs and behaviors to create designs that enhance usability and satisfaction.",
    },
    {
      image: <img src={logo5} alt="Development" />,
      title: "Visual Excellence",
      description:
        "Our designers specialize in creating aesthetically pleasing interfaces that not only captivate users but also enhance usability and functionality.",
    },
    {
      image: <img src={logo6} alt="Development" />,
      title: "Customization and Flexibility",
      description:
        "Each feature design is meticulously crafted to be unique to your requirements, ensuring it integrates seamlessly with your existing platform or product.",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">{service.image}</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="inline-flex items-center text-green-500 hover:text-green-600 transition-colors duration-200">
              Link
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSection;
