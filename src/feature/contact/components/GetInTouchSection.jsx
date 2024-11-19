import React from "react";
import Profile from "../../../assets/ContactImg/Profile.png";
import ContactForm from "./ContactForm";

const GetInTouchSection = () => {
  return (
    <section>
      <div className=" py-4 mt-6 px-6 sm:px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10070.058287691463!2d96.58391983508805!3d19.019287740329474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1732021222469!5m2!1sen!2smm"
          width="100%"
          height="450"
          
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-10 flex h-[500px]">
        {/* Image on the left */}
        <div className="flex h-full w-1/2 items-stretch">
          <img
            src={Profile}
            alt="img"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Form on the right */}
        <div className="flex h-full w-1/2 items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
