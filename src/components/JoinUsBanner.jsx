import React from "react";
import Joinus from "../assets/join us.svg";

export default function JoinUsBanner() {
  return (
    <section className="relative bg-yellow-400 border-y-4 border-black w-full overflow-hidden">
      {/* Marquee Container */}
      <div className="flex items-center animate-marquee gap-12 whitespace-nowrap py-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex-shrink-0 px-4">
            <img
              src={Joinus}
              alt="Join Us"
              className="h-70 sm:h-70 md:h-80 lg:h-100 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
