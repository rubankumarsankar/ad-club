import React, { useState } from "react";
import heroImage from "../assets/hero-img.svg";
import bgGraphic from "../assets/hero-fream.svg";
import logo from "../assets/adclubmadras-logo.png";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Menu, MoveLeft, X } from "lucide-react"; // or use Heroicons

export default function HeroSection() {
  const { darkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      className={`relative min-h-screen overflow-hidden px-6 md:px-12 py-16 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{
        // backgroundImage: `url(${bgGraphic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <header className="absolute top-6 left-0 w-full px-6 md:px-12 flex justify-between items-center z-20">
        <div className="text-xl font-bold w-100">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-sm uppercase font-medium justify-end items-start">
          <ul>
            <li className="flex justify-end">
              <a href="#" className="hover:text-yellow-400  hover:decoration-yellow-400 transition duration-200">About Us</a>
            </li>
            <li className="flex justify-end">
              <a href="#" className="hover:text-yellow-400  hover:decoration-yellow-400 transition duration-200">Courses</a>
            </li>
            <li className="flex justify-end">
              <a href="#" className="hover:text-yellow-400  hover:decoration-yellow-400 transition duration-200">Become a Member</a>
            </li>
          </ul>

          <ul>
            <li className="flex justify-end">
              <a href="#" className="hover:text-yellow-400  hover:decoration-yellow-400 transition duration-200">Events</a>
            </li>
            <li className="flex justify-end">
              <a href="#" className="hover:text-yellow-400  hover:decoration-yellow-400 transition duration-200">Gallery</a>
            </li>
            <li className="flex justify-end">
              <a href="#" className="hover:text-yellow-400  hover:decoration-yellow-400 transition duration-200">Career</a>
            </li>
          </ul>

          <a href="#" className="ml-4 font-bold hover:text-yellow-400 hover:decoration-yellow-400 transition duration-200">Contact</a>
          <a href="#" className="text-yellow-400 font-semibold hover:decoration-yellow-500 transition duration-200">Members Login</a>
        </nav>


        {/* Mobile Toggle Button */}
        <button
          className="md:hidden z-30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Nav Panel */}
      {isMenuOpen && (
  <div
    className={`absolute top-20 left-0 w-full z-20 p-6 flex flex-col gap-4 text-sm font-medium uppercase md:hidden shadow-lg transition-all duration-300 ${
      darkMode
        ? "bg-black text-white border-t border-gray-800"
        : "bg-white text-black border-t border-gray-200"
    }`}
  >
    <a href="#" className="hover:text-yellow-400">About Us</a>
    <a href="#" className="hover:text-yellow-400">Courses</a>
    <a href="#" className="hover:text-yellow-400">Become a Member</a>
    <a href="#" className="hover:text-yellow-400">Events</a>
    <a href="#" className="hover:text-yellow-400">Gallery</a>
    <a href="#" className="hover:text-yellow-400">Career</a>
    <a href="#" className="font-bold hover:text-yellow-400">Contact</a>
    <a href="#" className="text-yellow-400 font-semibold">Members Login</a>

    {/* Theme Toggle Button */}
    {/* <button
      onClick={toggleTheme}
      className={`mt-4 px-4 py-2 rounded-full text-xs font-medium transition-colors duration-300 ${
        darkMode
          ? "bg-gray-100 text-black"
          : "bg-gray-800 text-white"
      }`}
    >
      {darkMode ? "Light" : "Dark"} Mode
    </button> */}
  </div>
)}


      {/* Hero Content */}
      <div
          className="relative z-10 pt-32 text-left max-w-6xl mx-auto"
          style={{
            backgroundImage: `url(${bgGraphic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginTop:"40px"
          }}
        >
        <div className="relative flex flex-col md:flex-row justify-start items-start">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-asgard uppercase leading-tight tracking-tight"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            A Legacy <br />
            of Innovation <br />
            in Advertising
          </motion.h1>

          <motion.p
            className=" md:absolute text-xs font-glancyr md:text-sm mt-8 md:mt-0 md:ml-10 max-w-md justify-end leading-relaxed tracking-tight" 
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            style={{
    // Apply only on screens wider than 768px (Tailwind's md breakpoint)
    ...(window.innerWidth >= 768 ? { marginLeft: "500px" } : {})
  }}
          >
            For over six decades, The Advertising Club Madras has been at the heart of India’s advertising industry — fostering creativity, collaboration, and professional growth.
          </motion.p>
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative w-full max-w-4xl mx-auto mt-12"
            >
            {/* Video Container */}
            <div className="relative w-full">
                {/* Video Element */}
                <video
                id="heroVideo"
                className="rounded-md shadow-lg w-full object-cover"
                src="/ads.mp4"
                poster={heroImage}
                preload="metadata"
                />

                {/* Custom Play Button */}
                <button
                onClick={() => {
                    const video = document.getElementById("heroVideo");
                    video.paused ? video.play() : video.pause();
                }}
                className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
                aria-label="Play Video"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M6 4l10 6-10 6V4z" />
                </svg>
                </button>

                {/* Scroll To Explore Icon */}
                <div className="absolute -top-10 -right-7 md:-top-12 md:-right-12  w-28 h-28 md:w-32 md:h-32">
                <div className="relative w-full h-full flex items-center justify-center rounded-full bg-black">
                    {/* Rotating Circular Text */}
                    <div className="absolute w-full h-full animate-spin-slow">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                        <path
                            id="circlePath"
                            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                        />
                        </defs>
                        <text
                        fill="white"
                        fontSize="7"
                        fontWeight="bold"
                        letterSpacing="2"
                        >
                        <textPath href="#circlePath">
                            • SCROLL TO EXPLORE • SCROLL TO EXPLORE •
                        </textPath>
                        </text>
                    </svg>
                    </div>

                    {/* Center Arrow */}
                    <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 z-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m0 0l-6-6m6 6l6-6"
                    />
                    </svg>
                </div>
                </div>
            </div>
            </motion.div>

        
      </div>

      {/* Scroll To Explore */}
      {/* <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute right-6 bottom-10 transform rotate-90 text-xs uppercase tracking-widest flex items-center space-x-2"
      >
        <span>Scroll to explore</span>
        <div className="w-4 h-4 border-2 border-current rounded-full animate-bounce" />
      </motion.div> */}
    </section>
  );
}


