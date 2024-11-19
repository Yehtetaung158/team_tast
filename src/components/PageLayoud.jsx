import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Container from "./Container";
import Footers from "./Footers";
import Navbar from "./Navbar";
import ScrollToTopBtn from "./ScrollToTopBtn";

const PageLayoud = () => {
  const location = useLocation();

  return (
    <main className="flex min-h-screen flex-col">
      <Container>
        <Navbar />
        <SwitchTransition>
          <CSSTransition
            timeout={200}
            key={location.pathname}
            classNames={"fade"}
          >
            <Outlet />
          </CSSTransition>
        </SwitchTransition>
        <ScrollToTopBtn />
        <Footers />
      </Container>
    </main>
  );
};

export default PageLayoud;
