import React from "react";

export default function JoinUsBanner() {
  return (
    <section className="relative bg-yellow-400 border-4 border-black w-full overflow-hidden h-40 sm:h-48 md:h-56 flex items-center">
      {/* Marquee Container */}
      <div className="whitespace-nowrap  flex items-center gap-12">
        {/* Repeat for seamless animation animate-marquee */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black font-asgard text-black uppercase">
              Join Us
            </h1>

            {/* Attached Tags */}
            <span className="bg-white px-4 py-1 rounded-full text-xs font-bold uppercase rotate-[15deg] shadow-md">
              Network
            </span>
            <span className="bg-white px-4 py-1 rounded-full text-xs font-bold uppercase -rotate-[15deg] shadow-md">
              Workshops
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
