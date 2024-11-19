import React from "react";
import Avatar from "react-avatar";
import { AiOutlineVideoCamera } from "react-icons/ai";

const AboutPage = () => {
  return (
    <div>
      <section className="relative bg-gray-100 min-h-screen py-16">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-b from-purple-300 to-purple-400 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-blue-200 rounded-tl-full"></div>

        <div className="relative container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12 ">
            <h1 className="text-5xl font-extrabold text-gray-800">About Us</h1>
            <p className="mt-4 text-gray-600 text-2xl font-semibold max-w-3xl mx-auto">
              Meet the people behind our success. Our team works passionately to
              deliver innovation and excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
              <div className="relative w-full h-32 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-lg">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member 1"
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
                />
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  David Sang
                </h3>
                <p className="text-gray-600">Project Lead</p>
                <p className="mt-4 text-gray-500 text-sm">
                  Passionate about creating seamless and dynamic user
                  experiences.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
              <div className="relative w-full h-32 bg-gradient-to-tr from-green-400 to-blue-500 rounded-lg">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member 2"
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
                />
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Ye Htet Aung
                </h3>
                <p className="text-gray-600">Project Manager</p>
                <p className="mt-4 text-gray-500 text-sm">
                  Expert in building scalable and efficient software solutions.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
              <div className="relative w-full h-32 bg-gradient-to-tr from-yellow-400 to-pink-500 rounded-lg">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member 3"
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
                />
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-gray-800">Zett</h3>
                <p className="text-gray-600">Project Developer</p>
                <p className="mt-4 text-gray-500 text-sm">
                  Crafting intuitive and aesthetically pleasing user interfaces.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
              <div className="relative w-full h-32 bg-gradient-to-tr from-red-400 to-purple-500 rounded-lg">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member 4"
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
                />
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-gray-800">Hannah</h3>
                <p className="text-gray-600">Project Developer</p>
                <p className="mt-4 text-gray-500 text-sm">
                  Keeping projects on track and delivering success on time.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
              <div className="relative w-full h-32 bg-gradient-to-tr from-purple-500 to-blue-600 rounded-lg">
                <img
                  src=" https://via.placeholder.com/150"
                  alt="Team Member 5"
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
                />
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-gray-800">Keo Tan</h3>
                <p className="text-gray-600">Project Developer</p>
                <p className="mt-4 text-gray-500 text-sm">
                  Ensuring quality and excellence in every deliverable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
