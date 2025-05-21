import React from "react";
import logo from "../assets/adclubmadras-logo.png";
import footerFream from "../assets/fotter-fream.svg";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div
      className="bg-yellow-500 text-black font-bold px-4 py-10 sm:px-6 md:px-12 lg:px-16 min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: `url(${footerFream})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-6">
        {/* Logo */}
        <div className="md:col-span-2 flex justify-start items-start animate-fadeIn">
          <img src={logo} alt="logo" className="w-24 sm:w-28 md:w-36 lg:w-40" />
        </div>

        {/* Navigation */}
       <div className="md:col-start-6 md:col-span-6 grid grid-cols-2 sm:grid-cols-4 text-xs md:text-sm font-normal leading-tight gap-y-4 animate-slideInUp mt-6 md:mt-0">
        <div className="flex flex-col space-y-2 text-right sm:text-right">
          <a href="#" className="hover:text-white hover:font-bold hover:underline decoration-white transition duration-200">
            ABOUT US
          </a>
          <a href="#" className="hover:text-white hover:font-bold hover:underline decoration-white transition duration-200">
            COURSES
          </a>
          <a href="#" className="hover:text-white hover:font-bold hover:underline decoration-white transition duration-200">
            BECOME A MEMBER
          </a>
        </div>
        <div className="flex flex-col space-y-2 text-center">
          <a href="#" className="hover:text-white hover:font-bold hover:underline decoration-white transition duration-200">
            EVENTS
          </a>
          <a href="#" className="hover:text-white hover:font-bold hover:underline decoration-white transition duration-200">
            GALLERY
          </a>
          <a href="#" className="hover:text-white hover:font-bold hover:underline decoration-white transition duration-200">
            CAREER
          </a>
        </div>
        <div className="flex flex-col space-y-2 font-extrabold text-center">
          <a href="#" className="hover:text-white hover:underline decoration-white transition duration-200">
            CONTACT
          </a>
        </div>
        <div className="flex flex-col space-y-2 font-extrabold text-center">
          <a href="#" className="hover:text-white hover:underline decoration-white transition duration-200">
            MEMBERS LOGIN
          </a>
        </div>
      </div>

        {/* Central Big Text */}
        <div className="md:col-span-8 row-span-4 font-asgard flex flex-col justify-center items-start text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-none animate-slideInLeft mt-10 md:mt-0">
          <h1 className="leading-none">ADVERTISING</h1>
          <h1 className="leading-none">CLUB MADRAS</h1>
        </div>

        {/* Contact Info */}
        <div className="md:col-start-10 md:col-span-3 text-xs md:text-sm font-normal mt-6 md:mt-2 leading-snug animate-fadeIn delay-300">
          <p>57, Bazullah Road,</p>
          <p>T. Nagar, Chennai - 600 017</p>
          <p>9848710762, 044 - 42694798</p>
          <p>
            <a
              href="mailto:advertisingclubmadras@gmail.com"
              className="underline"
            >
              advertisingclubmadras@gmail.com
            </a>
          </p>
          <div className="flex space-x-4 mt-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-black hover:text-gray-800 transition-all duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-black hover:text-gray-800 transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="md:col-span-12 row-start-6 text-[10px] sm:text-xs md:text-sm font-normal flex flex-col sm:flex-row justify-between items-center text-center sm:text-left pt-8 gap-2 mt-auto">
          <p>ADVERTISING CLUB MADRAS © 2024</p>
          <p>PRIVACY POLICY</p>
          <p>DESIGN & DEVELOPMENT BY AJAYWORKS</p>
        </div>

      </div>
    </div>
  );
};

export default FooterSection;
