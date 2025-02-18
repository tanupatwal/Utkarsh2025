import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import logo from "/assets/logo_white.png";

const Tab = ({ children, href, setPosition, onClick }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
    >
      <a
        href={href}
        onClick={onClick}
        className="relative z-10 block px-4 py-2 text-base text-white/90 transition-colors duration-300"
      >
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-full rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30"
      style={{ 
        boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)",
      }}
    />
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <header className="fixed top-0 z-50 w-full bg-[#0E0C15]/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-5 lg:px-10 py-4">
          <a 
            href="#" 
            className="block w-[12rem] transition-transform duration-300 hover:scale-105" 
            id="home"
          >
            <img 
              src={logo} 
              alt="Utkarsh Logo" 
              width={150} 
              height={30}
              className="drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]"
            />
          </a>

          <nav className="hidden lg:block">
            <ul
              className="relative flex items-center space-x-2 rounded-full border border-purple-900/30 bg-[#17151f]/50 p-1.5"
              onMouseLeave={() => {
                setPosition((pv) => ({
                  ...pv,
                  opacity: 0,
                }));
              }}
            >
              <Tab href="#about" setPosition={setPosition}>About</Tab>
              <Tab href="#events" setPosition={setPosition}>Events</Tab>
              <Tab href="#schedule" setPosition={setPosition}>Schedule</Tab>
              <Tab href="#team" setPosition={setPosition}>Team</Tab>
              <Cursor position={position} />
            </ul>
          </nav>

          <button
            className="lg:hidden relative group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative flex overflow-hidden items-center justify-center w-12 h-12 transform transition-all duration-300">
              <div className="flex flex-col justify-between w-6 h-5 transform transition-all duration-300 origin-center overflow-hidden">
                <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? "rotate-[42deg] translate-x-px" : ""}`} />
                <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? "-rotate-[42deg] -translate-x-px" : ""}`} />
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full backdrop-blur-md bg-[#0E0C15]/90 border-b border-purple-900/30 transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <nav className="max-w-7xl mx-auto py-4 px-5">
            <ul className="flex flex-col space-y-4">
              {["About", "Events", "Schedule", "Team"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-base text-white/90 hover:text-purple-400 transition-colors duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;