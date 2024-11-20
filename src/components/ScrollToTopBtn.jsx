import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <FaCircleArrowUp
        onClick={scrollToTop}
        className="fixed bottom-10 right-52 cursor-pointer rounded-full text-5xl text-HLHeaderColor max-sm:right-2 max-sm:text-4xl"
      />
    )
  );
};

export default ScrollToTopBtn;
