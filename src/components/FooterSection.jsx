import React from 'react';
import logo from "../assets/adclubmadras-logo.png";
import footerFream from "../assets/fotter-fream.svg";
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <div className="bg-yellow-500 text-black font-bold min-h-screen grid grid-cols-12 grid-rows-6 px-8 py-6" style={{
            backgroundImage: `url(${footerFream})`,
            
          }}>
      {/* Top Left Logo */}
      <div className="col-span-2 row-span-1 flex items-start">
        <img src={logo} alt="" />
      </div>

      {/* Top Right Navigation */}
      <div className="col-start-6 col-span-6 row-span-1 grid grid-cols-4 text-xs font-normal leading-tight">
        <div className="flex flex-col space-y-2 text-right">
          <a href="#" className="hover:underline">ABOUT US</a>
          <a href="#" className="hover:underline">COURSES</a>
          <a href="#" className="hover:underline">BECOME A MEMBER</a>
        </div>
        <div className="flex flex-col space-y-2 text-center">
          <a href="#" className="hover:underline">EVENTS</a>
          <a href="#" className="hover:underline">GALLERY</a>
          <a href="#" className="hover:underline">CAREER</a>
        </div>
        <div className="flex flex-col space-y-1 font-extrabold text-center">
          <a href="#" className="hover:underline">CONTACT</a>
          {/* <a href="#" className="hover:underline">MEMBERS LOGIN</a> */}
        </div>
        <div className="flex flex-col space-y-1 font-extrabold text-center">
          {/* <a href="#" className="hover:underline">CONTACT</a> */}
          <a href="#" className="hover:underline">MEMBERS LOGIN</a>
        </div>
      </div>

      {/* Contact info on right side */}
      <div className="col-start-10 col-span-6 row-start-2 text-xs font-normal mt-2 leading-snug">
        <p>57, Bazullah Road,</p>
        <p>T. Nagar, Chennai - 600 017</p>
        <p>9848710762, 044 - 42694798</p>
        <p>
          <a href="mailto:advertisingclubmadras@gmail.com" className="underline">
            advertisingclubmadras@gmail.com
          </a>
        </p>
       <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="LinkedIn" className="text-black hover:text-gray-800">
                <FaLinkedinIn size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="text-black hover:text-gray-800">
                <FaInstagram size={16} />
            </a>
        </div>
      </div>

      {/* Large text center */}
      <div className="col-span-8 row-span-4 font-asgard flex flex-col justify-center items-start text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
        <h1>ADVERTISING</h1>
        <h1>CLUB MADRAS</h1>
      </div>

      {/* Bottom footer */}
      <div className="col-span-12 row-start-6 text-xs font-normal flex justify-between px-6">
        <p>ADVERTISING CLUB MADRAS © 2024</p>
        <p>PRIVACY POLICY</p>
        <p>DESIGN&DEVELOPMENT BY AJAYWORKS</p>
      </div>
    </div>
  );
};

export default FooterSection;
