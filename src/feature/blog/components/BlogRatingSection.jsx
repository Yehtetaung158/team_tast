import React from "react";
import { motion } from "framer-motion";
const BlogRatingSection = () => {
  return (
    <section>
      <div>
        <h1 className="text-center font-header_style text-fontSizeMobileHeader font-bold text-headerColor lg:text-fontSizeHeader">
          Over 16.000 + companies{" "}
          <span className="text-HLHeaderColor">trust</span> our services and
          they are optimistic that they will be the best in the world.
        </h1>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full rounded bg-cardBgColor py-5 text-center"
        >
          <h1 className="text-[20px] text-paragraphColor lg:text-[25px]">
            Amazon
          </h1>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full rounded bg-cardBgColor py-5 text-center"
        >
          <h1 className="text-[20px] text-paragraphColor lg:text-[25px]">
            Creative Canvas Co.
          </h1>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full rounded bg-cardBgColor py-5 text-center"
        >
          <h1 className="text-[20px] text-paragraphColor lg:text-[25px]">
            InnovativeDesign
          </h1>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full rounded bg-cardBgColor py-5 text-center"
        >
          <h1 className="text-[20px] text-paragraphColor lg:text-[25px]">
            CreaTech Design
          </h1>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full rounded bg-cardBgColor py-5 text-center"
        >
          <h1 className="text-[20px] text-paragraphColor lg:text-[25px]">
            ArtisanAxis Design
          </h1>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full rounded bg-cardBgColor py-5 text-center"
        >
          <h1 className="text-[20px] text-paragraphColor lg:text-[25px]">
            ArtisanAxis Design
          </h1>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full rounded bg-cardBgColor py-5 text-center"
        >
          <h1 className="text-[20px] text-paragraphColor lg:text-[25px]">
            VisionaryVista
          </h1>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full rounded bg-cardBgColor py-5 text-center"
        >
          <h1 className="text-[20px] text-paragraphColor lg:text-[25px]">
            PixelPerfection Studios
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogRatingSection;
