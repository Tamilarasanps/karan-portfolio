import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 sm:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left side */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Karan N . All rights reserved.
        </p>

        {/* Social links */}
        {/* === Social Links === */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Tamilarasanps"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tamilarasan-ps-4b66b72b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:tamilarasan.softwarengineer@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
