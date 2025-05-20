import React from "react";
import { motion } from "framer-motion";
import Circle from "../assets/rounded.svg"; // assumed compatible in both themes

export default function EventSection() {
  return (
    <section className="relative bg-white dark:bg-black text-black dark:text-white py-32 px-4 sm:px-6 md:px-10 lg:px-16 flex justify-center items-center overflow-hidden transition-colors duration-500">
      {/* Oval SVG behind content */}
      <img
        src={Circle}
        alt="decorative circle"
        className="absolute w-[80%] max-w-4xl opacity-90 dark:invert"
        style={{ zIndex: 1 }}
      />

      {/* Text content */}
      <div className="relative z-10 max-w-4xl text-center leading-tight px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-asgard md:text-6xl lg:text-7xl font-extrabold uppercase"
        >
          Stay ahead of <br /> the curve by participating in our upcoming<br />
          events
        </motion.h2>
      </div>
    </section>
  );
}
