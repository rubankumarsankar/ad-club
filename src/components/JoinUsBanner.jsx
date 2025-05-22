import React from "react";
import Joinus from "../assets/join us.svg";

export default function JoinUsBanner() {
  return (
    <section className="relative bg-yellow-400 border-4 border-black w-full overflow-hidden flex items-center">
      {/* Marquee Container */}
      <div className="whitespace-nowrap flex items-center animate-marquee gap-12">
        {[...Array(6)].map((__, i) => (
          <div key={i} className="flex-shrink-0 h-full gap-6">
            <img
              src={Joinus}
              alt="Join Us"
              className="h-full w-100 object-contain "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
