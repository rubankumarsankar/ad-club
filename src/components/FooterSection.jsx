import React from "react";
import logo from "../assets/adclubmadras-logo.png";
import footerFream from "../assets/fotter-fream.svg";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div
      className="bg-yellow-500 text-black font-bold px-6 py-10 md:px-12 lg:px-16 min-h-screen"
      style={{ backgroundImage: `url(${footerFream})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-6">
        {/* Logo */}
        <div className="md:col-span-2 row-span-1 flex items-start animate-fadeIn">
          <img src={logo} alt="logo" className="w-32 md:w-36 lg:w-40" />
        </div>

        {/* Navigation */}
        <div className="md:col-start-6 md:col-span-6 row-span-1 grid grid-cols-2 sm:grid-cols-4 text-xs font-normal leading-tight gap-y-4 animate-slideInUp">
          <div className="flex flex-col space-y-2 text-right sm:text-right">
            <a href="#" className="hover:underline transition duration-200">ABOUT US</a>
            <a href="#" className="hover:underline transition duration-200">COURSES</a>
            <a href="#" className="hover:underline transition duration-200">BECOME A MEMBER</a>
          </div>
          <div className="flex flex-col space-y-2 text-center">
            <a href="#" className="hover:underline transition duration-200">EVENTS</a>
            <a href="#" className="hover:underline transition duration-200">GALLERY</a>
            <a href="#" className="hover:underline transition duration-200">CAREER</a>
          </div>
          <div className="flex flex-col space-y-1 font-extrabold text-center">
            <a href="#" className="hover:underline transition duration-200">CONTACT</a>
          </div>
          <div className="flex flex-col space-y-1 font-extrabold text-center">
            <a href="#" className="hover:underline transition duration-200">MEMBERS LOGIN</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:col-start-10 md:col-span-3 row-start-2 text-xs font-normal mt-4 md:mt-2 leading-snug animate-fadeIn delay-300">
          <p>57, Bazullah Road,</p>
          <p>T. Nagar, Chennai - 600 017</p>
          <p>9848710762, 044 - 42694798</p>
          <p>
            <a href="mailto:advertisingclubmadras@gmail.com" className="underline">
              advertisingclubmadras@gmail.com
            </a>
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="LinkedIn" className="text-black hover:text-gray-800 transition-all duration-300">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="text-black hover:text-gray-800 transition-all duration-300">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* Central Big Text */}
        <div className="md:col-span-8 row-span-4 font-asgard flex flex-col justify-center items-start text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none animate-slideInLeft">
          <h1>ADVERTISING</h1>
          <h1>CLUB MADRAS</h1>
        </div>

        {/* Footer Bottom Bar */}
        <div className="col-span-1 md:col-span-12 row-start-6 text-xs font-normal flex flex-col sm:flex-row justify-between items-center gap-y-2 pt-6 animate-fadeIn delay-500">
          <p>ADVERTISING CLUB MADRAS © 2024</p>
          <p>PRIVACY POLICY</p>
          <p>DESIGN & DEVELOPMENT BY AJAYWORKS</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
