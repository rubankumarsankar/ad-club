import React, { useEffect } from "react";
import bgGraphic from "../assets/pen-outline-1.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Community() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center text-center px-4 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgGraphic})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          backgroundSize: "contain",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10 " />

      {/* Text */}
      <div className="relative z-20 -mt-10 mt-0 sm:-mt-[150px]" data-aos="fade-up">
        <h1 className="uppercase font-black font-asgard tracking-tight leading-tight text-yellow-400 space-y-2" >
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">A</div>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Community</div>
          <div className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Built On</div>
          <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Collabor</div>
          <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">ation &</div>
          <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Growth</div>
        </h1>
      </div>
    </section>
  );
}
