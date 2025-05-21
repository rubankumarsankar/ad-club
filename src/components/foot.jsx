import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function FooterBanner() {
  return (
    <section className="relative bg-yellow-400 text-black px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-20 font-asgard overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="w-10 h-10">
            <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
          </div>

          {/* Navigation */}
          <div className="text-xs sm:text-sm font-medium uppercase space-y-1 leading-relaxed">
            <p>About Us</p>
            <p>Courses</p>
            <p>Become a Member</p>
            <p>Clients</p>
            <p>Gallery</p>
            <p>Careers</p>
          </div>
        </div>

        {/* Center Title */}
        <div className="flex flex-col items-start md:items-center justify-center text-left md:text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight">
            Advertising <br /> Club Madras
          </h1>
          <p className="mt-4 text-xs uppercase font-medium hidden md:block">Scroll Up</p>
        </div>

        {/* Right Column */}
        <div className="space-y-4 text-xs sm:text-sm font-medium text-right md:text-left">
          <div>
            <p>67, Avenue Rd,</p>
            <p>T Nagar, Chennai - 600 017</p>
          </div>
          <div>
            <p>Contact: 044 - 123456789</p>
            <p>Email: adclubmadras@gmail.com</p>
          </div>
          <div className="flex gap-2 justify-end md:justify-start items-center">
            <span className="underline">In</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-12 pt-8 border-t border-black/30 text-xs font-medium flex flex-col sm:flex-row justify-between items-center gap-3">
        <p>© Advertising Club Madras 2024</p>
        <p>Privacy Policy</p>
        <p>Site by <span className="underline">AwesomeDev</span></p>
      </div>
    </section>
  );
}
