import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = (e) => {
    let windoScrollY = window.scrollY;
    let changeScrollY = 300;
    if (windoScrollY > changeScrollY) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={isBottom ? "scroll-to-top showScrollBtn" : "scroll-to-top "}
      onClick={() => window.scrollTo(0, 0)}
    >
      <span className="fa fa-angle-up"></span>
    </button>
  );
};

export default ScrollToTop;
