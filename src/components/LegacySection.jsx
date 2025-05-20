import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white px-6 py-16 md:py-24 transition-colors duration-500">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* Top Section - Right Aligned Slider */}
        <motion.div
          className="flex justify-end px-4"
          initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
          <div className="text-left space-y-4 max-w-md">
            <h4 className="uppercase font-asgard text-xs text-gray-500 dark:text-gray-400 tracking-widest">
              Some facts about us
            </h4>
            <div className="w-30 h-0.5 bg-black dark:bg-white mb-4 ml-auto" />

            <h2 className="text-4xl font-extrabold text-yellow-400">
              {sliderData[activeIndex].count}
            </h2>
            <p className="text-sm text-gray-700 font-glancyr dark:text-gray-300">
              {sliderData[activeIndex].title}
            </p>

            <div className="flex justify-center space-x-1 pt-2">
              {sliderData.map((_, index) => (
                <span
                  key={index}
                  className={`h-1 transition-all duration-300 ${
                    index === activeIndex
                      ? "w-10 bg-yellow-400"
                      : "w-10 bg-gray-400 dark:bg-gray-600 opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Legacy Message */}
        <motion.div
          className="space-y-8 text-left px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-4xl font-asgard uppercase sm:text-5xl font-extrabold leading-tight">
            WHERE HISTORY <br />
            FUELS THE <span className="text-yellow-400">FUTURE</span>
          </h2>

          <p className="mt-6 text-sm font-glancyr leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl">
            The Advertising Club Madras is one of India’s oldest and most
            respected advertising communities. We honor the pioneers who paved
            the way while empowering the next generation of creatives.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-flex font-asgard items-center"
          >
            <span className="px-6 py-3  bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-300 transition-all duration-300">
              EXPLORE OUR LEGACY
            </span>
            <span className="px-4 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="h-5 w-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
