import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import News1 from "../assets/Frame-1.svg";
import News2 from "../assets/Frame-2.svg";
import News3 from "../assets/Frame-3.svg";

const news = [
  {
    image: News1,
    title: "Creative Kaleidoscope Workshops Launched",
    subtitle: "",
    tag: "Workshop",
  },
  {
    image: News2,
    title: "Call for Entries: Annual Campaign Awards",
    subtitle: "",
    tag: "Awards",
  },
  {
    image: News3,
    title: "Celebrating the Next Generation of Creative Minds!",
    subtitle: "",
    tag: "Events",
  },
  {
    image: News1,
    title: "More Talent Building Events Coming Up",
    subtitle: "",
    tag: "Updates",
  },
  {
    image: News2,
    title: "New Partner Collaboration Announced",
    subtitle: "",
    tag: "Partnership",
  },
];

export default function LatestNews() {
  const [startIndex, setStartIndex] = useState(0);
  const timeoutRef = useRef(null);
  const visibleCount = 3;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % news.length);
    }, 4000);
    return () => resetTimeout();
  }, [startIndex]);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(news[(startIndex + i) % news.length]);
    }
    return items;
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 transition-colors duration-500">
      {/* Heading */}
      <motion.h2
        className="text-center font-asgard font-extrabold text-3xl uppercase mb-12 tracking-wider"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Latest News
      </motion.h2>

      {/* Carousel */}
      <div className="overflow-hidden max-w-7xl mx-auto">
        <motion.div
          className="flex gap-6"
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {getVisibleItems().map((item, idx) => {
            const isCenter = idx === 1;
            return (
              <motion.div
                key={idx}
                className={`w-full md:w-1/3 flex-shrink-0 transform transition-transform duration-500 ${
                  isCenter ? "scale-110 z-10" : "scale-95 opacity-80"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="group">
                  {/* Image */}
                  <div className="w-full h-72 overflow-hidden rounded-md mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Subtitle (if any) */}
                  {item.subtitle && (
                    <div className="bg-gradient-to-t from-yellow-100 to-yellow-200 dark:from-yellow-800 dark:to-yellow-700 text-black dark:text-white text-center p-4 text-sm font-bold mb-4">
                      {item.subtitle}
                    </div>
                  )}

                  {/* Title */}
                  <p className="text-sm font-bold uppercase mb-2">{item.title}</p>
                  <div className="border-t border-black dark:border-white border-opacity-40 my-2" />

                  {/* Tag button */}
                  <button
                    type="button"
                    className="text-[10px] uppercase border border-black dark:border-white px-3 py-1 rounded-full inline-block mb-2 transition-colors duration-300 hover:bg-yellow-400 dark:hover:bg-yellow-300 hover:text-black"
                  >
                    {item.tag}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* View All Button */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-flex font-asgard items-center"
        >
          <span className="px-6 py-3 bg-yellow-400 text-black uppercase rounded-full font-bold hover:bg-yellow-300 transition-all duration-300">
            View All Events
          </span>
          <span className="px-4 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center">
            <ArrowRight className="h-5 w-5" />
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
