import footerIcon from "../assets/footer-Icon.png";
import logo from "../assets/logo.jpg";

const Footers = () => {
  return (
    <div className="py-10">
      <footer className="grid grid-cols-2 justify-items-center gap-3 max-sm:text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div className="space-y-4 justify-self-end max-sm:ps-10 sm:justify-self-center">
          <img src={logo} className="mr-3 h-10 rounded-full" alt="Team Logo" />
          <p className="text-paragraphColor">
            Generate outside the box <br /> thinking with the <br /> possibility
            to target the <br /> low.
          </p>
          <div className="flex gap-4">
            {Array.from({ length: 4 }, (_, index) => (
              <img
                key={index}
                src={footerIcon}
                className="mr-3 h-3 rounded-full sm:h-4"
                alt="Team Logo"
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="font-bold text-lableColor">Company</div>
          <ul className="text-paragraphColor">
            <li>About</li>
            <li>Careers</li>
            <li>Security</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="font-bold text-lableColor">Products</div>
          <ul className="text-paragraphColor">
            <li>Features</li>
            <li>Integrations</li>
            <li>Enterprise</li>
            <li>Solutions</li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="font-bold text-lableColor">Resources</div>
          <ul className="text-paragraphColor">
            <li>Blog</li>
            <li>Customers</li>
            <li>Events</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="font-bold text-lableColor">Legal</div>
          <ul className="text-paragraphColor">
            <li>Terms of U</li>
            <li>Cookie policy</li>
            <li>Privacy policy</li>
            <li>Copyright</li>
          </ul>
        </div>
      </footer>
      <div className="text-center">
        <div className="flex justify-center">
          <img src={logo} className="mr-3 h-10 rounded-full" alt="Team Logo" />
        </div>
        <div className="pt-4 text-paragraphColor">
          &copy MMSIT@PUD. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footers;
