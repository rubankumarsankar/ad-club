import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Import images
import image1 from "../assets/image15.svg";
import image2 from "../assets/image16.svg";
import image3 from "../assets/image17.svg";

const images = [image1, image2, image3, image1, image2, image3];

export default function DiscoverMoments() {
  return (
    <section className="bg-black text-white py-16 px-4 overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold uppercase mb-10 font-asgard">
        Discover Our <br /> Moments
      </h2>

      {/* Auto-scrolling container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((src, idx) => (
            <div
              key={idx}
              className="transition-transform duration-500 hover:rotate-3 hover:scale-105"
            >
              <img
                src={src}
                alt={`Moment ${idx + 1}`}
                className="w-72 h-96 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center font-asgard"
        >
          <span className="px-6 py-3 bg-yellow-400 text-black uppercase rounded-full font-bold hover:bg-yellow-300 transition-all duration-300">
            View All Pics
          </span>
          <span className="px-3 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center">
            <ArrowRight className="h-5 w-5" />
          </span>
        </motion.button>
      </div>
    </section>
  );
}
