import React from "react";


const BlogPage = () => {
  return <div>BlogPage</div>;

import BlogHeorSection from "../components/BlogHeorSection";
import BlogCardSection from "../components/BlogCardSection";
import BlogRatinSection from "../components/BlogRatinSection";
import MailSection from "../components/MailSection";

const BlogPage = () => {
  return (
    <>
      <BlogHeorSection />
      <BlogCardSection />
      <BlogRatinSection />
      <MailSection/>
    </>
  );

};

export default BlogPage;
