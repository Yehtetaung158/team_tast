import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Container from "./Container";

const PageLayoud = () => {
  return (
    <main className="flex min-h-screen flex-col ">
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
};

export default PageLayoud;
