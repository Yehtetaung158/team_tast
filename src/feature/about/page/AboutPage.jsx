import React from "react";
import Avatar from "react-avatar";
import { AiOutlineVideoCamera } from "react-icons/ai";
import TeamMissonPage from "./TeamMissonPage";
import profileImg from "../../../assets/profile.jpeg";

const AboutPage = () => {
  return (
    <div>
      <section className="relative bg-gray-100 min-h-screen py-16">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-gray-00 py-12 absolute inset-100 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-blue-100 rounded-tl-full"></div>

        <div className="relative container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12 ">
            <h1 className="text-5xl font-extrabold text-gray-800">About Us</h1>
            <p className="mt-4 text-gray-600 text-2xl font-semibold max-w-3xl mx-auto">
              Meet the people behind our success. Our team works passionately to
              deliver innovation and excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray top-0 shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
              <Avatar
                src={profileImg}
                size="150"
                round={true}
                color="#E9F791"
              />

              <div className="mt-12 text-center">
                <h3 className="text-3xl font-semibold text-gray-800">
                  David Sang
                </h3>
                <p className="text-gray-600">FrontEnd Developer</p>
                <p className="mt-4 text-gray-900 text-sm">
                  Passionate about creating seamless and dynamic user
                  experiences.
                </p>
              </div>
            </div>

            <div className="bg-gray top-0 shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
              <Avatar
                src={profileImg}
                size="150"
                round={true}
                color="#E9F791"
              />
              <div className="mt-12 text-center">
                <h3 className="text-3xl font-semibold text-gray-800">
                  Ye Htet Aung
                </h3>
                <p className="text-gray-600">FrontEnd Developer</p>
                <p className="mt-4 text-gray-900 text-sm">
                  Focused on crafting engaging applications that empower users
                  to achieve more.
                </p>
              </div>
            </div>

            <div className="bg-gray top-0 shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
              <Avatar
                src={profileImg}
                size="150"
                round={true}
                color="#E9F791"
              />
              <div className="mt-12 text-center">
                <h3 className="text-3xl font-semibold text-gray-800">Zett</h3>
                <p className="text-gray-600">FrontEnd Developer</p>
                <p className="mt-4 text-gray-900 text-sm">
                  Driven by a commitment to innovation and delivering impactful
                  digital solutions.
                </p>
              </div>
            </div>

            <div className="bg-gray top-0 shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
              <Avatar
                src={profileImg}
                size="150"
                round={true}
                color="#E9F791"
              />
              <div className="mt-12 text-center">
                <h3 className="text-3xl font-semibold text-gray-800">Hannah</h3>
                <p className="text-gray-600">FrontEnd Developer</p>
                <p className="mt-4 text-gray-900 text-sm">
                  Passionate about designing clean, functional, and
                  aesthetically pleasing digital experiences.
                </p>
              </div>
            </div>

            <div className="bg-gray top-0 shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
              <Avatar
                src={profileImg}
                size="150"
                round={true}
                color="#E9F791"
              />
              <div className="mt-12 text-center">
                <h3 className="text-3xl font-semibold text-gray-800">
                  Keo Tan
                </h3>
                <p className="text-gray-600">FrontEnd Developer</p>
                <p className="mt-4 text-gray-900 text-sm">
                  Committed to continuously refining processes to enhance
                  usability and performance across platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <TeamMissonPage />
      </section>
    </div>
  );
};

export default AboutPage;
