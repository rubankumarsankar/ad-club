import React from "react";
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
];

export default function LatestNews() {
  return (
    <section className="bg-black text-white py-16 px-4">
      {/* Section Heading */}
      <motion.h2
        className="text-center text-white font-asgard font-extrabold text-3xl uppercase mb-12 tracking-wider"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Latest News
      </motion.h2>

      {/* News Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {news.map((item, idx) => (
          <motion.div
            key={idx}
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="w-full h-66 overflow-hidden rounded-md mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Subtitle */}
            {item.subtitle && (
              <div className="bg-gradient-to-t from-[#FADADD] to-[#FAE1DD] text-black text-center p-4 text-sm font-bold leading-tight mb-4">
                {item.subtitle}
              </div>
            )}

            {/* Title */}
            <p className="text-sm font-bold uppercase mb-2">{item.title}</p>

            {/* Divider */}
            <div className="border-t border-white border-opacity-40 mt-2 mb-2" />

            {/* Tag */}
            <span className="text-[10px] uppercase border border-white px-2 py-1 rounded-full inline-block mb-2">
              {item.tag}
            </span>
          </motion.div>
        ))}
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
