import React from "react";

export default function WhyJoinUsBanner() {
  return (
    <div className="w-full bg-white dark:bg-black overflow-hidden">
      <div className="animate-marquee whitespace-nowrap py-2 flex font-bold uppercase sm:text-base tracking-wide">
        {Array(20)
          .fill("✦ WHY JOIN US ✦")
          .map((text, index) => (
            <span
              key={index}
              className="bg-yellow-400 text-black rounded-full text-4xl font-asgard px-4 py-1 flex items-center justify-center whitespace-nowrap"
            >
              {text}
            </span>
          ))}
      </div>
    </div>
  );
}
