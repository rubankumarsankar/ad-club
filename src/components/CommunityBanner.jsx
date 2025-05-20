import React from "react";
import { motion } from "framer-motion";
import bgGraphic1 from "../assets/pen-outline-hero.svg";

export default function CommunityBanner() {
  return (
    <section
      className="relative bg-white dark:bg-black text-black dark:text-white py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-no-repeat bg-center bg-contain transition-colors duration-500"
      style={{
        backgroundImage: `url(${bgGraphic1})`,
        
      }}
    >
      <div className="max-w-5xl mx-auto text-center leading-none relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-asgard font-extrabold uppercase space-y-4"
        >
          <div className="text-yellow-400">
            A <br  /> COMMUNITY
          </div>
          <div>Built On</div>
          <div>
            Collabor <br  /> Ation <br  />
            <span>& Growth</span>
          </div>
        </motion.h2>
      </div>
    </section>
  );
}
