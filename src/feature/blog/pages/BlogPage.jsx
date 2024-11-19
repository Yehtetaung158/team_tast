import React from "react";
import BlogCardSection from "../components/BlogCardSection";
import BlogHeorSection from "../components/BlogHeorSection";
import BlogRatinSection from "../components/BlogRatinSection";
import MailSection from "../components/MailSection";

const BlogPage = () => {
  return (
    <>
      <BlogHeorSection />
      <BlogCardSection />
      <BlogRatinSection />
      <MailSection />
    </>
  );
};

export default BlogPage;
