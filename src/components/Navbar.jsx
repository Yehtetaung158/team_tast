import { motion } from "framer-motion";
import { useState } from "react";

import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import ResponsiveMenu from "./ResponsiveMenu";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
  },
  {
    id: 3,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    title: "Contact Us",
    link: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container flex items-center justify-between py-4 md:pt-4"
      >
        {/* Logo section */}
        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
          <Link to={"/"} className="flex items-center">
            <img
              src={logo}
              className="h-10 mr-3 rounded-full"
              alt="Team Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-header ">
              MCF10
            </span>
          </Link>
        </div>

        {/* Menu section */}
        <div className="max-md:hidden">
          <ul className="flex items-center gap-8 text-gray-600">
            {NavbarMenu.map(({ id, title, link }) => (
              <li key={id} className="text-xl">
                <Link
                  to={link}
                  className="inline-block px-3 py-1 font-semibold hover:text-primary hover:shadow-[0_3px_0_-1px_#79ca04]"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Menu section */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="size-8" />
        </div>
      </motion.div>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
