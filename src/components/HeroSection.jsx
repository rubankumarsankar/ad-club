import React, { useState } from "react";
import heroImage from "../assets/hero-img.svg";
import bgGraphic from "../assets/hero-fream.svg";
import logo from "../assets/adclubmadras-logo.png";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Menu, MoveLeft, X } from "lucide-react"; // or use Heroicons
import Navbar from "./Navbar";

export default function HeroSection() {
  const { darkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      className={`relative min-h-screen overflow-hidden px-6 md:px-12 py-16 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-black text-white"
      }`}
      style={{
        // backgroundImage: `url(${bgGraphic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     
      <Navbar />
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
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            A Legacy <br />
            of Innovation <br />
            in Advertising
          </motion.h1>

          <motion.p
              className="md:absolute text-xs font-glancyr md:text-sm mt-8 md:mt-0 md:ml-10 max-w-md justify-end leading-relaxed tracking-tight"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}

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
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
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

    </section>
  );
}


