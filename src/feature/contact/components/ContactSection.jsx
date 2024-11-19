import React from "react";
import Email from "../../../assets/ContactImg/Email.png";
import Location from "../../../assets/ContactImg/Location.png";
import Phone from "../../../assets/ContactImg/Phone.png";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <article className="flex flex-col space-y-10  ">
      <div className="mx-auto mb-3">
        <h2 className="text-headerColor font-header_style font-bold text-fontSizeHeader text-center mb-2">
          Our Team is Ready to <span className="text-HLHeaderColor">Help </span>
          you
        </h2>
        <p className="text-paragraphColor font-paragraph_style text-fontSizeParagraph leading-relaxed text-center">
          Our dedicated team is prepared and eager to provide you with the
          <br />
          assistance you need, ensuring your success and satisfaction. Feel
          <br />
          free to reach out anytime for our support.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-4/5 mx-auto">
        <ContactInfo image={Phone} text1="Phone" text2="+(98793852495)" />
        <ContactInfo image={Email} text1="Email" text2="mmsos.com" />
        <ContactInfo
          image={Location}
          text1="Location"
          text2="Yangon, Myanmar"
        />
      </div>
    </article>
  );
};

export default ContactSection;
