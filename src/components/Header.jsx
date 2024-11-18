import React, { useState } from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);
  console.log(isDropDownMenuOpen);
  return (
    <Container>
      <header>
        <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src={logo}
                className="h-10 mr-3 rounded-full"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                MCF10
              </span>
            </a>
            <div>
              {/* sm nav */}
              <div className="flex items-center lg:order-2 relative ">
                <button
                  onClick={() => setIsDropDownMenuOpen(!isDropDownMenuOpen)}
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {
                    isDropDownMenuOpen ? (
                      <BiX className=" size-8" />
                    ) : (
                      <BiMenu className=" size-8" />
                    )
                  }
                </button>
                {isDropDownMenuOpen && (
                  <div
                    id="dropdown"
                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute right-0 mb-0 top-12 lg:hidden"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <NavLink
                        to={"/"}
                        onClick={() => setIsDropDownMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to={"/about"}
                        onClick={() => setIsDropDownMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        About us
                      </NavLink>
                      <NavLink
                        to={"/blog"}
                        onClick={() => setIsDropDownMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Blog
                      </NavLink>
                      <NavLink
                        to={"/contact"}
                        onClick={() => setIsDropDownMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Contact
                      </NavLink>
                    </ul>
                  </div>
                )}
                {/* Dropdown menu */}
              </div>

              {/* lg nav */}
              <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <NavLink
                    to={"/"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/about"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to={"/blog"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
