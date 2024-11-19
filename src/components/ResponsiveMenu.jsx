/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute left-6 rounded-md top-20 z-20  w-[90%]  bg-gradient-to-b from-neutral-50 to-lime-500 "
        >
          <div className="m-6 rounded-3xl bg-primary py-10 text-xl font-semibold uppercase text-grayShades-60">
            <ul className="flex flex-col items-center gap-10">
              <Link to="/" onClick={() => setOpen(!open)}>
                Home
              </Link>
              <Link to={"/about"} onClick={() => setOpen(!open)}>
                About Us
              </Link>
              <Link to={"/blog"} onClick={() => setOpen(!open)}>
                Blog
              </Link>
              <Link to={"/contact"} onClick={() => setOpen(!open)}>
                Contact Us
              </Link>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
