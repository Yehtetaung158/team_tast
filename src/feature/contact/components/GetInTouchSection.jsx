import React from "react";
import Profile from "../../../assets/ContactImg/Profile.png";
import ContactForm from "./ContactForm";

const GetInTouchSection = () => {
  return (
    <section className="flex mt-10 h-[500px]">
      {/* Image on the left */}
      <div className="w-1/2 h-full flex items-stretch">
        <img src={Profile} alt="img" className="w-full h-full object-contain" />
      </div>

      {/* Form on the right */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <ContactForm />
      </div>
    </section>
  );
};

export default GetInTouchSection;
