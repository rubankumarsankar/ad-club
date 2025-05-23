import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import image1 from "../assets/Frame-1.svg";
import image2 from "../assets/Frame-2.svg";
import image3 from "../assets/Frame-3.svg";
import image4 from "../assets/Frame-4.svg";

const events = [
  { title: "Networking Opportunities", image: image1, slug: "networking-opportunities" },
  { title: "Workshops & Masterclasses", image: image2, slug: "workshops-and-masterclasses" },
  { title: "Competitions", image: image3, slug: "competitions" },
  { title: "Mentorship Programs", image: image4, slug: "mentorship-programs" },
  { title: "Awards & Celebrations", image: image1, slug: "awards-and-celebrations" },
];

export default function EventScrollStack() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
//   const navigate = useNavigate();

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
    <section ref={containerRef} className="relative h-[500vh] bg-black">
      {events.map((event, idx) => (
        <motion.div
          key={idx}
          className="sticky top-0 h-screen flex items-center justify-center"
          animate={{
            opacity: activeIndex === idx ? 1 : 0.3,
            scale: activeIndex === idx ? 1 : 0.85,
            zIndex: activeIndex === idx ? 10 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group w-[80%] max-w-5xl rounded-xl overflow-hidden shadow-xl">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[80vh] object-cover"
            />

            <div className="absolute bottom-4 left-4 z-20">
              {/* Title */}
              <div className="bg-yellow-400 text-black px-4 py-2 rounded shadow inline-block mb-2">
                <p className="text-sm font-bold uppercase">{event.title}</p>
              </div>

              {/* Hover Arrow Button */}
              <div
                className="mt-2 cursor-pointer"
                onClick={() => navigate(`/events/${event.slug}`)}
              >
                <div className="relative w-10 h-10 rounded-full bg-yellow-400 overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:w-32">
                  {/* Arrow icon */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <ArrowRight className="text-black w-4 h-4" />
                  </div>

                  {/* Text on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-black text-[10px] font-bold uppercase tracking-wide whitespace-nowrap">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
