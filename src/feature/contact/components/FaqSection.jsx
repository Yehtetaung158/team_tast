import React, { useState } from "react";

const FaqSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-6">
      {accordionData.map((item, index) => (
        <div
          key={index}
          id={`accordion-flush-${index}`}
          className="border border-gray-200 dark:border-gray-700 rounded-lg px-5 py-1 w-full"
        >
          <h2 id={`accordion-flush-heading-${index}`}>
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full py-3 font-medium rtl:text-right text-gray-500 dark:text-gray-400 gap-3"
              aria-expanded={activeAccordion === index}
              aria-controls={`accordion-flush-body-${index}`}
            >
              <span className="text-lg font-bold">{item.title}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 transform ${
                  activeAccordion === index ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>

          <div
            id={`accordion-flush-body-${index}`}
            className={`${
              activeAccordion === index ? "block" : "hidden"
            } py-3 px-2`}
            aria-labelledby={`accordion-flush-heading-${index}`}
          >
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const accordionData = [
  {
    title: "What design services do you offer?",
    content:
      "Our design services include UI/UX design, web development, branding, and more, all tailored to create exceptional user experiences and visually engaging interfaces.",
  },
  {
    title: "Can you customize your designs to fit my brand's style?",
    content:
      "Yes, we can fully customize our designs to fit your brand's unique style. From color palettes and typography to layouts and interactive elements, we work with you to ensure the final design aligns with your vision.",
  },
  {
    title: "How do I pay for your design services?",
    content:
      "We offer multiple payment options for your convenience, including credit/debit card payments, bank transfers, and online payment platforms such as PayPal.",
  },
  {
    title: "How can I get started with a design project?",
    content:
      "Getting started with your design project is easy! Simply reach out to us through our contact form or email to discuss your project requirements.",
  },
  {
    title: "Is my information secure when I work with your design team?",
    content:
      "Yes, your information is secure when you work with our design team. We take privacy and security very seriously, using secure communication channels and encryption.",
  },
];

export default FaqSection;
