import React from "react";
import aboutUsImg from "../../../assets/about-us.jpg";
import teamImg from "../../../assets/teamMission.png";

const TeamMissonPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-500 via-blue-100 to-blue-100 py-12 absolute inset-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              We aim to empower communities through innovation and
              collaboration. Our goal is to create solutions that inspire
              growth, creativity, and sustainable impact for a better tomorrow.
            </p>
            <a
              href="/about"
              className="inline-block bg-white text-blue-600 py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2">
            <img
              src={teamImg}
              alt="Team mission visual"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMissonPage;
