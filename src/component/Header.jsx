// App.jsx or App.js
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
// import "./App.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 px-6 py-4 shadow">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 tracking-wide">
            Karan 
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#Home"
                className="text-white hover:text-gray-900 font-medium transition text-lg"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Aboutus"
                className="text-white hover:text-gray-900 font-medium transition text-lg"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-white hover:text-gray-900 font-medium transition text-lg"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-gray-900 font-medium transition text-lg"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-gray-900 font-medium transition text-lg"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4">
            <li>
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-black font-medium transition text-lg"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-black font-medium transition text-lg"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-black font-medium transition text-lg"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-black font-medium transition text-lg"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-black font-medium transition text-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
export default Header;
