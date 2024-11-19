import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import BreadCrumb from "../../../components/Breadcrumb";
import Container from "../../../components/Container";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import FaqSection from "../components/FaqSection";

const ContactPage = () => {
  return (
    <Container>
      <section className="flex flex-col w-full mt-28">
        {/* Contact Title */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-header mb-4">Contact Us</h1>
          <div className="w-full flex justify-center mb-3">
            <BreadCrumb
              currentPageTitle="Contact Us"
              className="mx-auto text-subHeader"
            />
          </div>
          <div className="w-full flex justify-center mt-3">
            <img
              src="https://images.unsplash.com/photo-1731828406294-d63aa25ab075?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
              alt="Decorative"
              className="w-48 h-40 rounded"
            />
          </div>
        </header>

        {/* Contact Section */}
        <article className="flex flex-col space-y-4 ">
          <div className="mx-auto mb-3">
            <h2 className="text-header text-4xl font-bold text-center mb-2">
              Our team is ready to <span className="text-HLHeader">help </span>
              you
            </h2>
            <p className="text-lg text-paragraph leading-relaxed text-center">
              Our dedicated team is prepared and eager to provide you with the
              <br />
              assistance you need, ensuring your success and satisfaction. Feel
              <br />
              free to reach out anytime for our support.
            </p>
          </div>
          <div className="flex gap-3 justify-center">
            <ContactInfo
              icon={<LuPhoneCall />}
              text1="Phone"
              text2="+(98793852495)"
            />
            <ContactInfo
              icon={<LuPhoneCall />}
              text1="Email"
              text2="mmsos.com"
            />
            <ContactInfo
              icon={<LuPhoneCall />}
              text1="Location"
              text2="Yangon, Myanmar"
            />
          </div>
        </article>

        {/* Map Section*/}
        <section></section>

        {/* Get In Touch Section */}
        <section className="flex w-full mt-4">
          <div className="w-1/2 h-full flex items-stretch">
            <img
              src="https://images.unsplash.com/photo-1483247416020-58799b6de4c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
              alt="img"
              className="w-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full flex flex-col">
            {/* Contact Form */}
            <ContactForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section class="max-w-full mx-auto p-8 w-full">
          <h1 class="text-4xl font-bold text-header mb-12 text-center">
            Frequently Asked Questions
          </h1>
          <FaqSection />
        </section>

        {/* Business Section */}
        <section className="mx-auto mb-3 text-center">
          <h2 className="text-header text-4xl font-bold text-center mb-2">
            Want to know how we can help <br /> your business
          </h2>
          <button
            type="button"
            className="text-white mt-4 text-xl bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full  px-5 py-2.5 text-center mx-auto mb-4 dark:focus:ring-yellow-900"
          >
            Start a project with us
          </button>
        </section>

        {/* <section className="flex flex-col gap-16">
          <section class="grid grid-cols-6 gap-4">
            <div class="col-span-2 flex flex-col justify-center items-center">
              <img
                src="../../../assets/logo.jpg"
                alt="Logo"
                class="w-full h-auto max-w-[120px]"
              />
              <p>
                Generate outside the box <br /> thinking with the <br />
                possibility to target the <br /> low.
              </p>
            </div>
            <div class="col-span-1">
              <h3 class="font-bold text-lg mb-2">Company</h3>
              <ul>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-span-1">
              <h3 class="font-bold text-lg mb-2">Products</h3>
              <ul>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Integration
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Solutions
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-span-1">
              <h3 class="font-bold text-lg mb-2">Resources</h3>
              <ul>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-span-1">
              <h3 class="font-bold text-lg mb-2">Legal</h3>
              <ul>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Terms of U
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">
                    Copyright
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <div class="col-span-1 flex justify-center items-center flex-col ">
            <img
              src="../../../assets/logo.jpg"
              alt="Logo"
              class="w-full h-auto max-w-[120px]"
            />
            <p>&copy; 2023 MMSIT@PUD. All Rights Reserved.</p>
          </div>
        </section> */}
      </section>
    </Container>
  );
};

export default ContactPage;
