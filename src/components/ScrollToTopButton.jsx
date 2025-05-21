import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopWithLoader() {
  const [showButton, setShowButton] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [loading, setLoading] = useState(true);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds loader
    return () => clearTimeout(timer);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / winHeight) * 100;
      setScrollPercent(scrolled);
      setShowButton(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Loader Spinner
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {showButton && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 cursor-pointer"
          style={{ width: "50px", height: "50px" }}
        >
          <svg className="transform rotate-[-90deg]" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831"
              fill="none"
              stroke="#facc15"
              strokeWidth="3"
              strokeDasharray={`${scrollPercent}, 100`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-yellow-400">
            <FaArrowUp className="text-lg" />
          </div>
        </div>
      )}
    </>
  );
}
