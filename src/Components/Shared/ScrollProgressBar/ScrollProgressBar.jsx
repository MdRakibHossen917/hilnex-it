import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollProgress = (scrollPosition / totalHeight) * 100;
      setScroll(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[9999]">
      
      <div className="w-full bg-gray-400   h-0.5 dark:bg-gray-700">
        <div
          className="bg-gradient-to-r from-orange-400 via-orange-600 to-[#ff8402] h-0.5   transition-all duration-200"
          style={{ width: `${scroll}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;
