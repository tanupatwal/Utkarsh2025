import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="text-white py-12 px-8 lg:px-16 bg-gradient-to-b from-[#0E0C15] to-[#17151f]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full gap-8">
        {/* Left Section */}
        <motion.div 
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img
            src="/assets/logo1.jpg"
            alt="Utkarsh 2025"
            className="w-36 h-auto mb-4 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          />
          <p className="text-gray-400 italic text-sm sm:text-base font-medium mb-2">
            "Empowering the Future with Technology"
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-purple-400">📧</span>
            <a 
              href="https://adgips.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline"
            >
              https://adgips.ac.in/
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/utkarsh.adgips/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
            >
              <FaInstagram
                size={32}
                className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
              />
            </a>
            <a 
              href="https://www.linkedin.com/school/adgips/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin
                size={32}
                className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
              />
            </a>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">
              Connect with us on social media
            </p>
            <p className="text-xs text-gray-500">
              &copy; Utkarsh 2025. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
