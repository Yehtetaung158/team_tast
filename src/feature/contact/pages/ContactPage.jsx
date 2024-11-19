import React from "react";
import Container from "../../../components/Container";
import BusinessSection from "../components/BusinessSection";
import ContactSection from "../components/ContactSection";
import FaqSection from "../components/FaqSection";
import GetInTouchSection from "../components/GetInTouchSection";
import TitleSection from "../components/TitleSection";

const ContactPage = () => {
  return (
    <Container>
      <section className="flex flex-col w-full mt-28">
        <TitleSection />
        <ContactSection />
        <GetInTouchSection />
        <FaqSection />
        <BusinessSection />
      </section>
    </Container>
  );
};

export default ContactPage;
