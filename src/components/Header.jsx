import React, { useState } from "react";
import logo from "/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full h-18 bg-[#fefeff] backdrop-blur-sm border-b border-[#252134]">
      <div className="flex items-center justify-between px-5 lg:px-10 py-1">
        <a href="#" className="block w-[12rem]" id="home">
          <img src={logo} alt="College Fest Logo" width={150} height={30} />
        </a>

        <nav className="hidden lg:flex space-x-8">
          <a
            href="#about"
            className="text-[#252134] hover:text-purple-400 text-lg lg:text-xl"
          >
            About
          </a>
          <a
            href="#events"
            className="text-[#252134] hover:text-purple-400 text-lg lg:text-xl"
          >
            Events
          </a>
          <a
            href="#schedule"
            className="text-[#252134] hover:text-purple-400 text-lg lg:text-xl"
          >
            Schedule
          </a>
          <a
            href="#team"
            className="text-[#252134] hover:text-purple-400 text-lg lg:text-xl"
          >
            Team
          </a>
        </nav>

        <button
          className="lg:hidden text-[#252134] text-4xl transition-transform duration-300 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-[6rem] left-0 w-full bg-[#17151f] flex flex-col items-center py-4 space-y-4 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <a
          href="#about"
          className="text-white hover:text-purple-400 text-lg"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="#events"
          className="text-white hover:text-purple-400 text-lg"
          onClick={() => setIsOpen(false)}
        >
          Events
        </a>
        <a
          href="#schedule"
          className="text-white hover:text-purple-400 text-lg"
          onClick={() => setIsOpen(false)}
        >
          Schedule
        </a>
        <a
          href="#team"
          className="text-white hover:text-purple-400 text-lg"
          onClick={() => setIsOpen(false)}
        >
          Team
        </a>
      </div>
    </header>
  );
};

export default Header;
