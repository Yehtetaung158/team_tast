import React from "react";
import BlogCardSection from "../components/BlogCardSection";
import MailSection from "../components/MailSection";
import BlogHeroSection from "../components/BlogHeroSection";
import BlogRatingSection from "../components/BlogRatingSection";

const BlogPage = () => {
  return (
    <>
      <BlogHeroSection />
      <BlogCardSection />
      <BlogRatingSection/>
      <MailSection />
    </>
  );
};

export default BlogPage;
