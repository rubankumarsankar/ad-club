import { Menu, MoveLeft, X } from "lucide-react"; // or use Heroicons
import React, { useState } from "react";
import logo from "../assets/adclubmadras-logo.png";

function Navbar() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
 {/* Header */}
      <header className="absolute top-6 left-0 w-full px-6 md:px-12 flex justify-between items-center z-20">
        <a href="/">
        <div className="text-xl bg-black font-bold w-100">
          <img src={logo} alt="Logo"  className="text-black transition duration-300"  />
        </div>
          </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-sm uppercase font-medium justify-end items-start">
          <ul>
            <li className="flex justify-end">
              <a href="/about-us" className="hover:text-yellow-400  hover:decoration-yellow-400 transition duration-200">About Us</a>
            </li>
            <li className="flex justify-end">
              <a href="/courses" className="hover:text-yellow-400  hover:decoration-yellow-400 transition duration-200">Courses</a>
            </li>
            <li className="flex justify-end">
              <a href="/become-a-member" className="hover:text-yellow-400  hover:decoration-yellow-400 transition duration-200">Become a Member</a>
            </li>
          </ul>

          <ul>
            <li className="flex justify-end">
              <a href="/events" className="hover:text-yellow-400  hover:decoration-yellow-400 transition duration-200">Events</a>
            </li>
            <li className="flex justify-end">
              <a href="/gallery" className="hover:text-yellow-400  hover:decoration-yellow-400 transition duration-200">Gallery</a>
            </li>
            <li className="flex justify-end">
              <a href="/career" className="hover:text-yellow-400  hover:decoration-yellow-400 transition duration-200">Career</a>
            </li>
          </ul>

          <a href="/contact" className="ml-4 font-bold hover:text-yellow-400 hover:decoration-yellow-400 transition duration-200">Contact</a>
          <a href="/members-login" className="text-yellow-400 font-semibold hover:decoration-yellow-500 transition duration-200">Members Login</a>
        </nav>


        {/* Mobile Toggle Button */}
        <button
          className="md:hidden z-30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Nav Panel */}
      {isMenuOpen && (
  <div
    className={`absolute top-20 left-0 w-full z-20 p-6 flex flex-col gap-4 text-sm font-medium uppercase md:hidden shadow-lg transition-all duration-300 ${
      darkMode
        ? "bg-black text-white border-t border-gray-800"
        : "bg-white text-black border-t border-gray-200"
    }`}
  >
    <a href="/about-us" className="hover:text-yellow-400">About Us</a>
    <a href="/cources" className="hover:text-yellow-400">Courses</a>
    <a href="/become-a-member" className="hover:text-yellow-400">Become a Member</a>
    <a href="/events" className="hover:text-yellow-400">Events</a>
    <a href="/gallery" className="hover:text-yellow-400">Gallery</a>
    <a href="/career" className="hover:text-yellow-400">Career</a>
    <a href="/contact" className="font-bold hover:text-yellow-400">Contact</a>
    <a href="members-login" className="text-yellow-400 font-semibold">Members Login</a>
  </div>
)}
</>
  );
}

export default Navbar;