import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-4 px-10">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center w-full">
        <div className="flex flex-col items-start">
          <img
            src="/assets/logo1.jpg"
            alt="Utkarsh 2025"
            className="w-28 h-auto mb-2"
          />
          <p className="text-gray-400 italic text-xs sm:text-sm">
            "Empowering the Future with Technology"
          </p>
          <p className="text-xs sm:text-sm mt-1">
            📧{" "}
            <a
              href="mailto:contact@adgitmdelhi.ac.in"
              className="text-blue-400 hover:underline"
            >
              contact@adgitmdelhi.ac.in
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/utkarsh.adgips/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className="text-pink-500 hover:scale-110 transition duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/school/adgips/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="text-blue-500 hover:scale-110 transition duration-300"
              />
            </a>
          </div>
          <p className="text-xs text-gray-400">
            © Utkarsh 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
