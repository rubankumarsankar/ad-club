import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PenOutline from "../assets/Penoutline-bg.svg";

export default function JoinUsSection() {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white p-10">
      <div
        className="relative bg-white dark:bg-black text-black dark:text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-no-repeat bg-center bg-contain transition-colors duration-500"
        style={{
          backgroundImage: `url(${PenOutline})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Scroll Animation Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-2xl mx-auto text-center relative z-10"
        >
          <h2 className="text-yellow-400 text-3xl md:text-4xl font-asgard font-extrabold uppercase mb-6 tracking-wide">
            Join Us Today
          </h2>

          <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-xl font-glancyr uppercase leading-relaxed font-light mb-10 px-4 md:px-12 text-center sm:text-center">
            Join a vibrant community of advertising <br className="hidden sm:block" />
            professionals, storytellers, and creative minds. <br className="hidden sm:block" />
            Whether you're looking to network, learn, or <br className="hidden sm:block" />
            showcase your talent, the Advertising Club Madras <br className="hidden sm:block" />
            welcomes you.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-flex font-asgard items-center"
          >
            <span className="px-6 py-3  bg-yellow-400 text-black uppercase rounded-full font-bold hover:bg-yellow-300 transition-all duration-300">
              Join US Today
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
