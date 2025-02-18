import React, { useState } from "react";
import { motion } from "framer-motion";

import img1 from "/assets/eventimg/img1.jpg";
import img2 from "/assets/eventimg/img2.jpg";
import img3 from "/assets/eventimg/img3.jpg";
import img4 from "/assets/eventimg/img4.jpg";
import img5 from "/assets/eventimg/img5.jpg";
import img6 from "/assets/eventimg/img6.jpg";
import img7 from "/assets/eventimg/img7.jpg";
import img8 from "/assets/eventimg/img8.jpg";
import img9 from "/assets/eventimg/img9.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-8 lg:p-16 bg-gradient-to-b from-[#1a1a2e] to-[#0E0C15]"
      id="events"
    >
      <motion.h1 
        className="text-5xl lg:text-7xl md:text-6xl font-bold font-aclonica mb-16 text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        Event Highlights
      </motion.h1>

      <div
        className="relative grid gap-6 place-items-center mb-12"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(80px, 1fr))",
          width: "min(90vw, 800px)",
          height: "min(90vw, 800px)",
        }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-2xl"
            initial={{
              opacity: index === 4 ? 1 : 0,
              scale: index === 4 ? 2 : 0,
            }}
            animate={{
              opacity: isOpen || index === 4 ? 1 : 0,
              scale: isOpen || index === 4 ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: index === 4 ? 0 : 0.5 + index * 0.1,
            }}
          >
            <img
              src={src}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-medium">View Event</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className={`px-8 py-4 text-xl font-semibold rounded-lg transition-all duration-300 
          ${isOpen 
            ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600' 
            : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600'
          } 
          text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? 'Close Gallery' : 'Unlock Gallery'}
      </motion.button>
    </div>
  );
};

export default Events;