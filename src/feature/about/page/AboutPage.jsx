import React from "react";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import FourthSection from "../components/FourthSection";

import TableSection from "../components/TableSection";
import ReviewSection from "../components/ReviewSection";
import PrivacyCard from "../components/PrivacyCard";

const AboutPage = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <TableSection />
      <ReviewSection />
      <PrivacyCard />
    </div>
  );
};

export default AboutPage;
