import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const sliderData = [
  {
    count: "500+",
    title: "creatives, advertisers, and strategists",
  },
  {
    count: "75+",
    title: "years of advertising legacy campaigns",
  },
  {
    count: "1000+",
    title: "campaigns supported and celebrated",
  },
];

export default function LegacySection() {
  const { darkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`w-full px-6 py-20 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30 items-start relative">
        {/* Right Section - Animated on Load */}
        <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative lg:absolute lg:top-[0px] lg:right-[50px] text-left lg:text-left max-w-full sm:max-w-sm mx-auto lg:mx-0"
>
  <p className="text-sm uppercase tracking-widest font-asgard font-semibold opacity-90 mb-2">
    SOME FACTS ABOUT US
  </p>
  <div className="w-30 h-0.5 bg-black dark:bg-white mb-4 mx-auto lg:mx-0" />

  <motion.div
    key={activeIndex}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-4xl sm:text-5xl font-bold text-yellow-400">
      {sliderData[activeIndex].count}
    </h3>
    <p className="mt-2 text-sm sm:text-base font-glancyr opacity-90">
      {sliderData[activeIndex].title}
    </p>
  </motion.div>

  <div className="flex items-center gap-2 mt-4 justify-center lg:justify-start">
    {sliderData.map((_, index) => (
      <div
        key={index}
        className={`h-1 rounded-full transition-all duration-500 ${
          index === activeIndex
            ? "bg-yellow-400 w-10"
            : "bg-yellow-700 w-5 opacity-50"
        }`}
      />
    ))}
  </div>
</motion.div>


        {/* Left Section */}
        <div className="pt-6 lg:pt-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight font-asgard">
            WHERE HISTORY <br />
            FUELS THE <span className="text-yellow-400">FUTURE</span>
          </h2>
          <p className="mt-6 text-sm sm:font-glancyr font-glancyr leading-relaxed opacity-90 max-w-xl">
            The Advertising Club Madras is one of India’s oldest and most
            respected advertising communities. We honor the pioneers who paved
            the way while empowering the next generation of creatives.
          </p>

          {/* Animated Button on Hover */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-flex items-center font-asgard text-sm sm:text-base"
          >
            <span className="px-6 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-300 transition-all duration-300">
              EXPLORE OUR LEGACY
            </span>
            <span className="px-4 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="h-5 w-5" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
