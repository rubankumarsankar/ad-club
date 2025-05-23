import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import image1 from "../assets/Event-1.svg";
import image2 from "../assets/Event-2.svg";
import image3 from "../assets/Event-3.svg";
import image4 from "../assets/Event-4.svg";
import image5 from "../assets/Event-5.svg";

const events = [
  { title: "Networking Opportunities", image: image1, slug: "networking-opportunities" },
  { title: "Workshops & Masterclasses", image: image5, slug: "workshops-and-masterclasses" },
  { title: "Competitions", image: image4, slug: "competitions" },
  { title: "Mentorship Programs", image: image2, slug: "mentorship-programs" },
  { title: "Awards & Celebrations", image: image3, slug: "awards-and-celebrations" },
];

export default function EventScrollStack() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = window.scrollY + window.innerHeight * 0.5;
      const sectionHeight = containerRef.current.scrollHeight / events.length;
      const index = Math.min(
        events.length - 1,
        Math.floor((scrollY - containerRef.current.offsetTop) / sectionHeight)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-white dark:bg-black transition-colors duration-500">
      {events.map((event, idx) => (
        <motion.div
          key={idx}
          className="sticky top-0 h-screen flex items-center justify-center px-4"
          animate={{
            opacity: activeIndex === idx ? 1 : 0.3,
            scale: activeIndex === idx ? 1 : 0.9,
            zIndex: activeIndex === idx ? 10 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group w-full sm:w-[90%] md:w-[80%] max-w-5xl rounded-xl overflow-hidden shadow-xl">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
            />

            <div className="absolute bottom-4 left-4 z-20">
              {/* Title with theme support */}
              <div className="bg-yellow-400/80 dark:bg-yellow-300/80 backdrop-blur-md text-black px-4 py-2 rounded shadow inline-block mb-2 transition-all duration-300">
                <p className="text-sm sm:text-base font-asgard font-bold uppercase">{event.title}</p>
              </div>

              {/* Hover Button with theme support */}
              <div
                className="mt-2 cursor-pointer"
                onClick={() => navigate(`/events/${event.slug}`)}
              >
                                
                <motion.button
                  initial={{ width: 40 }}
                  whileHover={{ width: 180 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative h-10 sm:h-10 rounded-full bg-yellow-400 dark:bg-yellow-300 overflow-hidden flex items-center justify-start pl-2"
                >
                  {/* Arrow Icon */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center"
                  >
                    <ArrowRight className="text-black w-4 h-4" />
                  </motion.div>

                  {/* Text Label */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="text-black text-[8px] sm:text-xs font-asgard font-bold uppercase tracking-wide text-center w-full"
                  >
                    View Details
                  </motion.span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
